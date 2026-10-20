// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOptimizeRunRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON input defined by the task type, preserving the original object or array structure. ExperienceMining accepts a start/end/processTimeMaxNS object. SkillOptimize accepts an inline input array, a skills/window object for SLS, or a skills/records object for ATIF or xTrace. The server validates the input based on the task type and configuration. Memory extraction continues to use the original ContextStore API.
   * 
   * This parameter is required.
   * 
   * @example
   * {"start":1727136000,"end":1727139600,"processTimeMaxNS":1727139600000000000}
   */
  input?: any;
  /**
   * @remarks
   * Specifies whether to execute an independent pre-run of the complete algorithm. The pre-run generates candidate results and evidence without publishing them to the target dataset or advancing the formal run history. A formal run executes the algorithm independently.
   * 
   * @example
   * false
   */
  preview?: boolean;
  /**
   * @remarks
   * The idempotency token. Use the same value when you retry the same creation request.
   * 
   * @example
   * a1b2c3d4-1234-5678-90ab-cdef12345678
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'input',
      preview: 'preview',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'any',
      preview: 'boolean',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

