import { MyCard } from "../MyCard/mycard";
import {Box} from '@mui/material';

export const MyList=()=>{
    const arr=`[{
        "id":101,
        "name": "Unitree Go1", 
        "price": "$2,700.00 USD", 
        "description": "None", 
        "count": "5", 
        "folder": "./robots/UnitreeGo1", 
        "images": "https://shop.unitree.com/cdn/shop/products/75.jpg?v=1668073774, https://shop.unitree.com/cdn/shop/products/76.jpg?v=1668073774, https://shop.unitree.com/cdn/shop/products/77.jpg?v=1668073773, https://shop.unitree.com/cdn/shop/products/78.jpg?v=1668073773, https://shop.unitree.com/cdn/shop/products/79.jpg?v=1668073773", 
        "link": "https://shop.unitree.com/products/unitreeyushutechnologydog-artificial-intelligence-companion-bionic-companion-intelligent-robot-go1-quadruped-robot-dog"
    }, 
    {
        "id":102,
        "name": "Unitree Go2", 
        "price": "$2,800.00 USD", 
        "description": "None", 
        "count": "5", 
        "folder": "./robots/UnitreeGo2", 
        "images": "https://shop.unitree.com/cdn/shop/files/df9f333424ff6cc6164ce421b019fb94_a6f832b0-479e-4294-ac75-6516208b91f4.png?v=1718274082, https://shop.unitree.com/cdn/shop/files/21.png?v=1718274083, https://shop.unitree.com/cdn/shop/files/22.png?v=1718274083, https://shop.unitree.com/cdn/shop/files/23.png?v=1718274083, https://shop.unitree.com/cdn/shop/files/24.png?v=1718274083", 
        "link": "https://shop.unitree.com/products/unitree-go2"
    }, 
    {
        "id":103,
        "name": "Unitree B2", 
        "price": "$100,000.00 USD", 
        "description": "None", 
        "count": "5", 
        "folder": "./robots/UnitreeB2", 
        "images": "https://shop.unitree.com/cdn/shop/files/1_e701c6a6-1448-4504-a895-385a64140740.jpg?v=1718359410, https://shop.unitree.com/cdn/shop/files/2_3c98c0ec-fbb1-4537-9318-bf094eb4baff.jpg?v=1718359410, https://shop.unitree.com/cdn/shop/files/3_0624501f-36fd-4b9a-8ea9-11a0a0eb7676.jpg?v=1718359411, https://shop.unitree.com/cdn/shop/files/4_bfae60ee-6862-466b-9cb5-142ba16027f6.jpg?v=1718359411, https://shop.unitree.com/cdn/shop/files/5_a20f8dec-d53d-4413-abe7-24af46d15f05.jpg?v=1718359410", 
        "link": "https://shop.unitree.com/products/unitree-b2"
    },  
    {
        "id":104,
        "name": "Unitree B1", 
        "price": "$100,000.00 USD", 
        "description": "None", 
        "count": "5", 
        "folder": "./robots/UnitreeB1", 
        "images": "https://shop.unitree.com/cdn/shop/products/153.jpg?v=1668073744, https://shop.unitree.com/cdn/shop/products/152.jpg?v=1668073744, https://shop.unitree.com/cdn/shop/products/151.jpg?v=1668073744, https://shop.unitree.com/cdn/shop/products/154.jpg?v=1668073729, https://shop.unitree.com/cdn/shop/products/155.jpg?v=1668073728", 
        "link": "https://shop.unitree.com/products/unitree-b1"
    }, 
    {
        "id":105,
        "name": "Aliengo", 
        "price": "$50,000.00 USD", 
        "description": "Unitree Aliengo is capable of running at 1.5m/s, It can easily realize special sports forms such as fast running, backward running, left and right side shifting, turning in place, creeping forward, rolling over, jumping, crossing obstacles, avoiding obstacles, going up and down slopes/steps.The main industry landing (all-terrain inspections, such as substation inspections, construction surveying and mapping, etc.), such as for electric power, for petrochemical, and for coal as a forward-looking industry technology pre-research.", 
        "count": "5", 
        "folder": "./robots/Aliengo", 
        "images": "https://shop.unitree.com/cdn/shop/products/157.jpg?v=1668073700, https://shop.unitree.com/cdn/shop/products/158.jpg?v=1668073700, https://shop.unitree.com/cdn/shop/products/159.jpg?v=1668073700, https://shop.unitree.com/cdn/shop/products/160.jpg?v=1668073700, https://shop.unitree.com/cdn/shop/products/161.jpg?v=1668073700", 
        "link": "https://shop.unitree.com/products/aliengo"
    }, 
    {
        "id":106,
        "name": "Unitree Z1", 
        "price": "$15,999.00 USD", 
        "description": "None", 
        "count": "5", 
        "folder": "./robots/UnitreeZ1", 
        "images": "https://shop.unitree.com/cdn/shop/files/3_e795751c-68d0-4c55-ace1-6aeeb565a06d.jpg?v=1718274550, https://shop.unitree.com/cdn/shop/files/1_d81a16db-058a-44b2-b691-90a5280a4dfa.jpg?v=1718274550, https://shop.unitree.com/cdn/shop/files/4_9f33e402-28cf-41b3-b66e-009351d3983a.jpg?v=1718274550, https://shop.unitree.com/cdn/shop/files/5_97d44010-55fd-4ce6-8c95-d462e7f33595.jpg?v=1718274550, https://shop.unitree.com/cdn/shop/files/2_f96c33bf-b39b-48fb-b93e-90ba78e92dea.jpg?v=1718274550", 
        "link": "https://shop.unitree.com/products/unitree-z1"
    }, 
    {
        "id":107,
        "name": "Unitree G1", 
        "price": "$16,000.00 USD", 
        "description": "Unlock unlimited sports potential (Extra large joint movement space angle, 23~43 joints)\u0412\u00a0", "count": "2", 
        "folder": "./robots/UnitreeG1", 
        "images": "https://shop.unitree.com/cdn/shop/files/2_3769ceea-b323-4ebc-a1f4-e27a9624706b.jpg?v=1717575246, https://shop.unitree.com/cdn/shop/files/1_968fd08b-9aaf-4f32-b895-5c786285ee52.jpg?v=1717575256", 
        "link": "https://shop.unitree.com/products/unitree-g1"
    }, 
    {
        "id":108,
        "name": "Unitree H1",
        "price": "$90,000.00 USD", 
        "description": "Embodied AI, Price below $90k ", 
        "count": "4", 
        "folder": "./robots/UnitreeH1", 
        "images": "https://shop.unitree.com/cdn/shop/files/1_deeaa3cc-08f5-454f-bfcb-1a477b30adb4.jpg?v=1718359355, https://shop.unitree.com/cdn/shop/files/2_fa366397-5fe1-488b-89e1-d3ca3fb0e754.jpg?v=1718359355, https://shop.unitree.com/cdn/shop/files/3_0241c65b-f618-4547-b0bf-ee05501922ae.jpg?v=1718359355, https://shop.unitree.com/cdn/shop/files/4_e96adb7a-0b0c-4748-935c-f67469ea892c.jpg?v=1718359355", 
        "link": "https://shop.unitree.com/products/unitree-h1"
    }]`;

    const style={
        margin:"20px auto",
        width:"80vw",
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(185px,1fr))",
        justifyContent:"center",
        justifyItems:"center",
        alignItems:"center",
        gap:"20px",
    }

    return(
        <Box style={style}>
        {
            JSON.parse(arr).map((item)=>(
                <MyCard key={item.id} item={item}/>
            ))
        }
        </Box>
    );
}