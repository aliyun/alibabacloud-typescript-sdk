// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStandardGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the database engine. For more information about the valid values of this parameter, see [DbType parameter](https://help.aliyun.com/document_detail/198106.html).
   * 
   * This parameter is required.
   * 
   * @example
   * mysql
   */
  dbType?: string;
  /**
   * @remarks
   * The description of the security rule set.
   * 
   * This parameter is required.
   * 
   * @example
   * test_rule
   */
  description?: string;
  /**
   * @remarks
   * The name of the security rule set.
   * 
   * This parameter is required.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 3000
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      description: 'Description',
      groupName: 'GroupName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      description: 'string',
      groupName: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

