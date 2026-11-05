import * as $dara from '@darabonba/typescript';
export declare class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItemsHbaItem extends $dara.Model {
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
export declare class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItems extends $dara.Model {
    hbaItem?: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItemsHbaItem[];
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
export declare class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItemsHbaItem extends $dara.Model {
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
export declare class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItems extends $dara.Model {
    hbaItem?: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItemsHbaItem[];
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
export declare class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItem extends $dara.Model {
    afterHbaItems?: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemAfterHbaItems;
    beforeHbaItems?: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItems;
    modifyStatus?: string;
    modifyTime?: string;
    statusReason?: string;
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
export declare class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItems extends $dara.Model {
    hbaLogItem?: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItem[];
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
export declare class DescribeModifyPGHbaConfigLogResponseBody extends $dara.Model {
    DBInstanceId?: string;
    hbaLogItems?: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItems;
    logItemCount?: number;
    requestId?: string;
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
