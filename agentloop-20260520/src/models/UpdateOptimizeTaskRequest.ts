// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOptimizeTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The type-related configurations. Optional prompts for ExperienceMining or SkillOptimize support only inline Markdown, and the body is saved to inputs.prompt.content (non-empty UTF-8, up to 16 KiB).
   * 
   * @example
   * {"ioVersion":2,"inputs":{"experienceLibrary":{"type":"dataset","dataset":"experiences"},"trajectory":{"type":"sls","project":"my-project","logstore":"agent-trajectory","format":"atif"},"prompt":{"type":"inline","format":"markdown","content":"# Guidance\\\\nExtract evidence-backed tool contracts."}},"outputs":{"changePlan":{"type":"dataset","dataset":"experience-plans"}},"operators":["tool_contract"],"application":{"mode":"manual"}}
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The status of the task. Valid values: Enabled and Disabled.
   * 
   * @example
   * Disabled
   */
  status?: string;
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
      status: 'status',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
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

