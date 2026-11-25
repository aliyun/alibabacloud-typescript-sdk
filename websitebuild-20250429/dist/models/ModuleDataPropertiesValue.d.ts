import * as $dara from '@darabonba/typescript';
export declare class ModuleDataPropertiesValueValues extends $dara.Model {
    /**
     * @remarks
     * placeholder
     *
     * @example
     * placeholder
     */
    value?: string;
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
export declare class ModuleDataPropertiesValue extends $dara.Model {
    /**
     * @remarks
     * The property code, such as "aliyun_commodity_agreement".
     *
     * @example
     * placeholder
     */
    code?: string;
    /**
     * @remarks
     * The list of property values.
     */
    values?: ModuleDataPropertiesValueValues[];
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
