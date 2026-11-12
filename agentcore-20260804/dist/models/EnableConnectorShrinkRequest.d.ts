import * as $dara from '@darabonba/typescript';
export declare class EnableConnectorShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for the enable operation.
     *
     * This parameter is required.
     */
    bodyShrink?: string;
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
