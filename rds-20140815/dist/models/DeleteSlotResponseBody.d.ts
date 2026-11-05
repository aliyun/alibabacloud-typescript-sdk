import * as $dara from '@darabonba/typescript';
export declare class DeleteSlotResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 2875D608-A228-53D7-B8C9-35F13EDCF36D
     */
    requestId?: string;
    /**
     * @remarks
     * The name of the replication slot.
     *
     * @example
     * slot_test01
     */
    slotName?: string;
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
