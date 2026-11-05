import * as $dara from '@darabonba/typescript';
export declare class ConfirmNotifyRequest extends $dara.Model {
    /**
     * @remarks
     * The Alibaba Cloud account ID of the user who confirms the notification. You can also set this parameter to **0**, which indicates that the notification is automatically confirmed by the system.
     *
     * This parameter is required.
     *
     * @example
     * 0
     */
    confirmor?: number;
    /**
     * @remarks
     * The list of notification IDs.
     *
     * This parameter is required.
     *
     * **if can be null:**
     * false
     */
    notifyIdList?: number[];
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
