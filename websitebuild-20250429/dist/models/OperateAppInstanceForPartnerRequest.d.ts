import * as $dara from '@darabonba/typescript';
export declare class OperateAppInstanceForPartnerRequest extends $dara.Model {
    /**
     * @remarks
     * The extended information.
     *
     * @example
     * {\\"deliveryNodeName\\":\\"交付质检\\",\\"deliveryNodeStatus\\":\\"Finish\\",\\"deliveryOperatorRole\\":\\"Provider\\"}
     */
    extend?: string;
    /**
     * @remarks
     * The operation event type.
     *
     * @example
     * SERVICE_DELIVERY_PROCESS
     */
    operateEvent?: string;
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
