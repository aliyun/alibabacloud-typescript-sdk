// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOptimizeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The type-specific configurations. Optional prompts for ExperienceMining and SkillOptimize only support inline Markdown. The main text is saved to inputs.prompt.content (non-empty UTF-8, up to 16 KiB).
   * 
   * @example
   * {"ioVersion":2,"inputs":{"experienceLibrary":{"type":"dataset","dataset":"experiences"},"trajectory":{"type":"sls","project":"my-project","logstore":"agent-trajectory","format":"atif"},"prompt":{"type":"inline","format":"markdown","content":"# Guidance\\\\nExtract evidence-backed tool contracts."}},"outputs":{"changePlan":{"type":"dataset","dataset":"experience-plans"}},"operators":["tool_contract"],"application":{"mode":"manual"}}
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The name of the optimization task. The name of a new service task is specified by the caller and must be unique within the same AgentSpace.
   * 
   * @example
   * efficiency-analysis
   */
  optimizeTaskName?: string;
  /**
   * @remarks
   * The status of the task. Valid values: Enabled, Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The type of the optimization task. Valid values: ExperienceMining, SkillOptimize, EfficiencyAnalysis, SOPGeneration, EvalMining, PolicyMining, and AssetMining. The memory base uses the current ContextStore and the original Worker, and is not integrated with Mining.
   * 
   * @example
   * EfficiencyAnalysis
   */
  type?: string;
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * a1b2c3d4-1234-5678-90ab-cdef12345678
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      optimizeTaskName: 'optimizeTaskName',
      status: 'status',
      type: 'type',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      optimizeTaskName: 'string',
      status: 'string',
      type: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

