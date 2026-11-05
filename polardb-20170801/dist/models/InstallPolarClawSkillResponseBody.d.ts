import * as $dara from '@darabonba/typescript';
export declare class InstallPolarClawSkillResponseBody extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * pa-xxx
     */
    applicationId?: string;
    /**
     * @remarks
     * The returned status code.
     *
     * @example
     * 200
     */
    code?: number;
    /**
     * @remarks
     * The returned message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * Indicates whether the operation is successful. This parameter is returned when Async is set to false.
     *
     * @example
     * true
     */
    ok?: boolean;
    /**
     * @remarks
     * The operation name. This parameter is returned when Async is set to true.
     *
     * @example
     * InstallPolarClawSkill
     */
    operation?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * F45FFACC-xxx
     */
    requestId?: string;
    /**
     * @remarks
     * The identifier of the installed skill. This parameter is returned during synchronous execution.
     *
     * @example
     * alibacloud-rds-copilot
     */
    slug?: string;
    /**
     * @remarks
     * The initial state of the task. This parameter is returned when Async is set to true.
     *
     * @example
     * pending
     */
    state?: string;
    /**
     * @remarks
     * The installation directory. This parameter is returned during synchronous execution.
     *
     * @example
     * /home/node/.openclaw/skills/alibacloud-rds-copilot
     */
    targetDir?: string;
    /**
     * @remarks
     * The ID of the asynchronous task. This parameter is returned when Async is set to true.
     *
     * @example
     * 9f1c2e3d-xxxx
     */
    taskId?: string;
    /**
     * @remarks
     * The installed version number. This parameter is returned during synchronous execution.
     *
     * @example
     * 1.2.0
     */
    version?: string;
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
