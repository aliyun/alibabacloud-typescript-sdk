// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOptimizeTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The scheduling checkpoint, which stores states such as the general scheduling watermark.
   */
  checkpoint?: { [key: string]: any };
  /**
   * @remarks
   * The type-specific configuration. Optional prompts for ExperienceMining or SkillOptimize support only inline Markdown. The body is saved to inputs.prompt.content, which must be a non-empty UTF-8 string of up to 16 KiB.
   * 
   * @example
   * {"ioVersion":2,"inputs":{"experienceLibrary":{"type":"dataset","dataset":"experiences"},"trajectory":{"type":"sls","project":"my-project","logstore":"agent-trajectory","format":"atif"},"prompt":{"type":"inline","format":"markdown","content":"# Guidance\\\\nExtract evidence-backed tool contracts."}},"outputs":{"changePlan":{"type":"dataset","dataset":"experience-plans"}},"operators":["tool_contract"],"application":{"mode":"manual"}}
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-08-12T10:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The next scheduling trigger time.
   * 
   * @example
   * 2026-08-13T16:00:00Z
   */
  nextTriggerTime?: string;
  /**
   * @remarks
   * The optimization task name.
   * 
   * @example
   * efficiency-analysis
   */
  optimizeTaskName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The task status. Valid values: Enabled, Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The optimization task type.
   * 
   * @example
   * EfficiencyAnalysis
   */
  type?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2026-08-12T10:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'checkpoint',
      config: 'config',
      createTime: 'createTime',
      nextTriggerTime: 'nextTriggerTime',
      optimizeTaskName: 'optimizeTaskName',
      regionId: 'regionId',
      requestId: 'requestId',
      status: 'status',
      type: 'type',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createTime: 'string',
      nextTriggerTime: 'string',
      optimizeTaskName: 'string',
      regionId: 'string',
      requestId: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.checkpoint) {
      $dara.Model.validateMap(this.checkpoint);
    }
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

