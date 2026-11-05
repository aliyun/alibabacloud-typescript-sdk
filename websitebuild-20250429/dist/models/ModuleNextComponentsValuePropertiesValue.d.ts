import * as $dara from '@darabonba/typescript';
export declare class ModuleNextComponentsValuePropertiesValueValues extends $dara.Model {
    /**
     * @remarks
     * Property code (internal system identifier)
     *
     * @example
     * placeholder
     */
    code?: string;
    /**
     * @remarks
     * Property value code (internal system value)
     *
     * @example
     * placeholder
     */
    value?: string;
    /**
     * @remarks
     * Property display name (user-visible name)
     *
     * @example
     * placeholder
     */
    name?: string;
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
export declare class ModuleNextComponentsValuePropertiesValue extends $dara.Model {
    /**
     * @remarks
     * Property code (internal system identifier)
     *
     * @example
     * placeholder
     */
    code?: string;
    /**
     * @remarks
     * Property display name (user-visible name)
     *
     * @example
     * placeholder
     */
    name?: string;
    /**
     * @remarks
     * Property value code (internal system value)
     *
     * @example
     * placeholder
     */
    value?: string;
    /**
     * @remarks
     * Module property value list
     */
    values?: ModuleNextComponentsValuePropertiesValueValues[];
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
