// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateDetectConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the drift detection configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * dc-xxxx
   */
  detectConfigId?: string;
  /**
   * @remarks
   * The ID of the association target. The value is a stack ID or a task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * stack-xxxxx
   */
  targetId?: string;
  /**
   * @remarks
   * The type of the association target. Valid values:
   * - Task: orchestration task
   * - Stack: stack
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

