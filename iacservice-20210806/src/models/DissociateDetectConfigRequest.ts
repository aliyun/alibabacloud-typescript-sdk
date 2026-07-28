// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DissociateDetectConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Drift detection configuration ID
   * 
   * @example
   * dc-xxxx
   */
  detectConfigId?: string;
  /**
   * @remarks
   * ID of the association target. StackId or TaskId
   * 
   * This parameter is required.
   * 
   * @example
   * stack-xxxx
   */
  targetId?: string;
  /**
   * @remarks
   * Type of the association target
   * 
   * - Task: Orchestration job  
   * - Stack: Resource stack
   * 
   * This parameter is required.
   * 
   * @example
   * Stack
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      detectConfigId: 'detectConfigId',
      targetId: 'targetId',
      targetType: 'targetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectConfigId: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

