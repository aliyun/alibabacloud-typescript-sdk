// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigNumListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the agent account. The name is unique within the instance and serves as the logon name.
   * 
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @remarks
   * The department ID.
   * 
   * @example
   * 12345
   */
  departmentId?: number;
  /**
   * @remarks
   * The ID of the AICCS instance. You can obtain the instance ID in the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      departmentId: 'DepartmentId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      departmentId: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

