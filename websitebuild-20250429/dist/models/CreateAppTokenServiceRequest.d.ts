import * as $dara from '@darabonba/typescript';
export declare class CreateAppTokenServiceRequest extends $dara.Model {
    /**
     * @remarks
     * The subscription type: OPEN_SUBSCRIPTION.
     *
     * @example
     * OPEN_SUBSCRIPTION
     */
    createAction?: string;
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
