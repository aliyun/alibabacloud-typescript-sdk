// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNotifyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the notification policy, returned by the create operation.
   * 
   * This parameter is required.
   * 
   * @example
   * a1b2c3d4-e5f6-7890-abcd-ef1234567890
   */
  uuid?: string;
  /**
   * @remarks
   * The workspace ID. Used to isolate notification policy resources across different business spaces. Example: `default-cms-xxxx-ap-southeast-1`.
   * 
   * This parameter is required.
   * 
   * @example
   * default-cms-xxxx-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'uuid',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

