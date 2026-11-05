import * as $dara from '@darabonba/typescript';
export declare class CreateAppAssistantAgentRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the agent.
     *
     * @example
     * 测试业务空间
     */
    agentName?: string;
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WS20250731233102000001
     */
    bizId?: string;
    /**
     * @remarks
     * The platform type.
     *
     * @example
     * LINUX64
     */
    platformType?: string;
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
