// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttackTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the scan target. If the target does not exist or belongs to another tenant, a 400 error is returned to avoid exposing whether the resource exists.
   * 
   * This parameter is required.
   * 
   * @example
   * target-abc123def4567
   */
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

