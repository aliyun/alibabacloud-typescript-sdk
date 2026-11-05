import * as $dara from '@darabonba/typescript';
export declare class CreateBatchTaskShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The target application type of the batch task.
     *
     * @example
     * polarclaw
     */
    applicationType?: string;
    /**
     * @remarks
     * The machine instance IDs.
     *
     * This parameter is required.
     */
    instanceIdsShrink?: string;
    /**
     * @remarks
     * The per-instance parameter overrides (JSON object: instanceId -> param). This parameter is used in scenarios where multiple instances have different targets, such as different agent workspaces.
     *
     * @example
     * {"pa-xxx1":{"agentId":"test1"},"pa-xxx2":{"scope":"global"}}
     */
    instanceParams?: string;
    /**
     * @remarks
     * The archive parameters.
     *
     * @example
     * [{"skillName":"github","version":"1.0.0"},{"skillName":"skill-vetter","version":"1.0.1"}]
     */
    param?: string;
    /**
     * @remarks
     * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to view the regions of all clusters under the target account.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The description of the model service.
     *
     * This parameter is required.
     *
     * @example
     * batch_task_test
     */
    taskName?: string;
    /**
     * @remarks
     * The task type.
     *
     * This parameter is required.
     *
     * @example
     * polarclaw_install_skills
     */
    taskType?: string;
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
