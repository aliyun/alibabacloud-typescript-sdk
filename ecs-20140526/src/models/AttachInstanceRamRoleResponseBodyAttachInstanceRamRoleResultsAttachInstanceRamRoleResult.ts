// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachInstanceRamRoleResponseBodyAttachInstanceRamRoleResultsAttachInstanceRamRoleResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the instance RAM role was attached. If the instance RAM role was attached, 200 is returned. If the instance RAM role failed to be attached, any other value is returned. For more information, see the "Error codes" section.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp10ws62o04ubhvi****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the instance RAM role was attached. If the instance RAM role was attached, success is returned. If the instance RAM role failed to be attached, any other value is returned. For more information, see the "Error codes" section.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the instance RAM role was attached.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

