import * as $dara from '@darabonba/typescript';
export declare class DeleteCustomAgentRequest extends $dara.Model {
    /**
     * @remarks
     * AgentId。
     *
     * @example
     * ebe44453-3b41-4c74-94d1-01d088d7****
     */
    customAgentId?: string;
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
