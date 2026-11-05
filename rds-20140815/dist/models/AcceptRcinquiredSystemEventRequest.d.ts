import * as $dara from '@darabonba/typescript';
export declare class AcceptRCInquiredSystemEventRequest extends $dara.Model {
    /**
     * @remarks
     * This parameter is required.
     *
     * **if can be null:**
     * true
     */
    eventId?: string;
    /**
     * @remarks
     * This parameter is required.
     *
     * **if can be null:**
     * true
     */
    regionId?: string;
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
