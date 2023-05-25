/**
 * All the hashcat supported hashtypes with their regex format
 * Test in browser console.log(/^[a-f0-9]{32}(:.+)?$$/.test('nNxKL2rOEkbBc9BFLsVGG6OtOUO/8n:user'));
**/
export declare const algoritms: ({
    id: number;
    description: string;
    regex?: undefined;
    rAttack?: undefined;
    options?: undefined;
    example?: undefined;
} | {
    regex: string;
    rAttack: string;
    options: {
        id: number;
        description: string;
        example: string;
    }[];
    id?: undefined;
    description?: undefined;
    example?: undefined;
} | {
    id: number;
    description: string;
    regex: string;
    rAttack?: undefined;
    options?: undefined;
    example?: undefined;
} | {
    id: number;
    description: string;
    example: string;
    regex?: undefined;
    rAttack?: undefined;
    options?: undefined;
})[];
