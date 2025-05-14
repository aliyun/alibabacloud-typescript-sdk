// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigNumListRequest extends $dara.Model {
  /**
   * @example
   * 123@123.com
   */
  accountName?: string;
  /**
   * @example
   * 12345
   */
  departmentId?: number;
  /**
   * @remarks
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

