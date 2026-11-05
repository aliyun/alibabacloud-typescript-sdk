import * as $dara from '@darabonba/typescript';
export declare class DataResourceValue extends $dara.Model {
    /**
     * @remarks
     * The content.
     *
     * @example
     * Sample content
     */
    content?: string;
    /**
     * @remarks
     * The metadata.
     */
    metadata?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * The name.
     *
     * @example
     * agentspec-example
     */
    name?: string;
    /**
     * @remarks
     * The type.
     *
     * @example
     * file
     */
    type?: string;
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
