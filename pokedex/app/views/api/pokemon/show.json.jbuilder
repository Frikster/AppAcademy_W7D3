json.set! 'pokemon' do
  json.partial! 'pokemon', pokemon: @pokemon
end

json.set! 'items' do
  @pokemon.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
    end
  end
end
