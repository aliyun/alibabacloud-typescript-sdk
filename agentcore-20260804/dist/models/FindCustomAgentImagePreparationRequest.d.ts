import * as $dara from '@darabonba/typescript';
export declare class FindCustomAgentImagePreparationRequest extends $dara.Model {
    /**
     * @remarks
     * The client token submitted when creating or explicitly updating an image. Do not specify AgentId or the operation type.
     *
     * This parameter is required.
     *
     * @example
     * image-update-20261022-001
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
