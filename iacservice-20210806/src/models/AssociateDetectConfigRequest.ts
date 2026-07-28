// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateDetectConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Drift detection configuration ID
   * 
   * This parameter is required.
   * 
   * @example
   * dc-xxxx
   */
  detectConfigId?: string;
  /**
   * @remarks
   * Target ID to associate. StackId or TaskId
   * 
   * This parameter is required.
   * 
   * @example
   * stack-xxxxx
   */
  targetId?: string;
  /**
   * @remarks
   * Target type to associate  
   * - Task: orchestration job  
   * - Stack: resource stack
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

