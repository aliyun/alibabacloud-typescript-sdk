import * as $dara from '@darabonba/typescript';
/**
 */
export declare class DialogBaseBodyAttachments extends $dara.Model {
    name?: string;
    size?: string;
    type?: string;
    url?: string;
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
export declare class DialogBaseBodyDataInfo extends $dara.Model {
    bizId?: string;
    bizType?: number;
    component?: {
        [key: string]: any;
    }[];
    container?: any;
    content?: string;
    contentDesensitized?: string;
    editable?: number;
    props?: {
        [key: string]: any;
    }[];
    schema?: string;
    schemaId?: number;
    serviceChannel?: string;
    title?: string;
    values?: {
        [key: string]: any;
    };
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
export declare class DialogBaseBodyFooterInfo extends $dara.Model {
    ext?: {
        [key: string]: any;
    };
    schema?: string;
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
export declare class DialogBaseBodyUserInfo extends $dara.Model {
    avatar?: string;
    role?: number;
    userId?: string;
    userName?: string;
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
export declare class DialogBaseBody extends $dara.Model {
    attachments?: DialogBaseBodyAttachments[];
    channelCode?: string;
    createTime?: number;
    dataInfo?: DialogBaseBodyDataInfo;
    dialogId?: number;
    footerInfo?: DialogBaseBodyFooterInfo;
    hitWords?: string[];
    modifiedTime?: number;
    referInfo?: DialogBaseBody;
    stage?: number;
    status?: number;
    ticketId?: string;
    ticketStatus?: number;
    timestamp?: number;
    tip?: string;
    type?: number;
    userInfo?: DialogBaseBodyUserInfo;
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
