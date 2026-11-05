import * as $dara from '@darabonba/typescript';
export declare class DeletePermissionRuleRequest extends $dara.Model {
    /**
     * @remarks
     * The client token that ensures the idempotence of the request.
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
