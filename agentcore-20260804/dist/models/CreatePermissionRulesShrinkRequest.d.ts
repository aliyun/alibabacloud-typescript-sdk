import * as $dara from '@darabonba/typescript';
export declare class CreatePermissionRulesShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for creating permission rules.
     */
    bodyShrink?: string;
    /**
     * @remarks
     * The idempotency token.
     *
     * @example
     * 550e8400-e29b-41d4-a716-446655440000
     */
    clientToken?: string;
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
