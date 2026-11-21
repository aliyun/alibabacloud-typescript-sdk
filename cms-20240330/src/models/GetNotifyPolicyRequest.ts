// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNotifyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the notification policy, which is returned by the create operation.
   * 
   * This parameter is required.
   * 
   * @example
   * a1b2c3d4-e5f6-7890-abcd-ef1234567890
   */
  uuid?: string;
  /**
   * @remarks
   * The workspace ID, which is used to isolate notification policy resources for different business workspaces. Example: `default-cms-xxxx-cn-hangzhou`.
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

