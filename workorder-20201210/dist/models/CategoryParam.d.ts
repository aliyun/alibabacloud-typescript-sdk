import * as $dara from '@darabonba/typescript';
export declare class CategoryParam extends $dara.Model {
    categoryId?: number;
    categoryName?: string;
    isSelectFromDialog?: boolean;
    productId?: number;
    productName?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
