// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDetectConfigRelationsRequest extends $dara.Model {
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
   * Target ID to associate. StackId or TaskId
   * 
   * @example
   * stack-xxxxx
   */
  targetId?: string;
  /**
   * @remarks
   * Type of the association target
   * 
   * - Task: orchestration Job  
   * - Stack: resource stack
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

