import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawSkillDetailRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-xxx
     */
    applicationId?: string;
    /**
     * @remarks
     * The skill identifier.
     *
     * This parameter is required.
     *
     * @example
     * alibacloud-rds-copilot
     */
    slug?: string;
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
