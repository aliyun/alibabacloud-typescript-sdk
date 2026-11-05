import * as $dara from '@darabonba/typescript';
export declare class DescribePGHbaConfigResponseBodyDefaultHbaItemsHbaItem extends $dara.Model {
    address?: string;
    database?: string;
    mask?: string;
    method?: string;
    option?: string;
    priorityId?: number;
    type?: string;
    user?: string;
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
export declare class DescribePGHbaConfigResponseBodyDefaultHbaItems extends $dara.Model {
    hbaItem?: DescribePGHbaConfigResponseBodyDefaultHbaItemsHbaItem[];
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
export declare class DescribePGHbaConfigResponseBodyRunningHbaItemsHbaItem extends $dara.Model {
    address?: string;
    database?: string;
    mask?: string;
    method?: string;
    option?: string;
    priorityId?: number;
    type?: string;
    user?: string;
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
export declare class DescribePGHbaConfigResponseBodyRunningHbaItems extends $dara.Model {
    hbaItem?: DescribePGHbaConfigResponseBodyRunningHbaItemsHbaItem[];
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
export declare class DescribePGHbaConfigResponseBody extends $dara.Model {
    DBInstanceId?: string;
    defaultHbaItems?: DescribePGHbaConfigResponseBodyDefaultHbaItems;
    hbaModifyTime?: string;
    lastModifyStatus?: string;
    modifyStatusReason?: string;
    requestId?: string;
    runningHbaItems?: DescribePGHbaConfigResponseBodyRunningHbaItems;
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
