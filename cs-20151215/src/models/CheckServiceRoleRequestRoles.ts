// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceRoleRequestRoles extends $dara.Model {
  /**
   * @remarks
   * The server role name. For more information about the service roles and their permissions in ACK, see [ACK roles](https://help.aliyun.com/document_detail/86483.html).
   * 
   * This parameter is required.
   * 
   * @example
   * AliyunCSManagedAutoScalerRole
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

