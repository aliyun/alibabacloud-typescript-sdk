// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNotifyPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the notification policy, returned by the creation operation.
   * 
   * This parameter is required.
   * 
   * @example
   * np-12345678-1234-1234-1234-123456789012
   */
  uuid?: string;
  /**
   * @remarks
   * The workspace ID. Used to isolate notification policy resources across different business spaces.
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

