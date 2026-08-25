// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DissociateDetectConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the drift detection configuration.
   * 
   * @example
   * dc-xxxx
   */
  detectConfigId?: string;
  /**
   * @remarks
   * The ID of the association target. The value is a StackId or TaskId.
   * 
   * This parameter is required.
   * 
   * @example
   * stack-xxxx
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the association target. Valid values:
   * 
   * - Task: orchestration task.
   * - Stack: resource stack.
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

