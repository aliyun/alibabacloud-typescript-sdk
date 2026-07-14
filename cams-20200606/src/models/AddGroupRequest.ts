// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The business tenant code.
   * 
   * @example
   * 示例值示例值示例值
   */
  bizCode?: string;
  /**
   * @remarks
   * The business extension information.
   * 
   * @example
   * {}
   */
  bizExtend?: { [key: string]: any };
  /**
   * @remarks
   * The contact description.
   * 
   * @example
   * 15111111111
   */
  contactDetails?: string;
  /**
   * @remarks
   * The contact name.
   * 
   * @example
   * mary
   */
  contactName?: string;
  /**
   * @remarks
   * The country.
   * 
   * @example
   * China
   */
  country?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * 示例值示例值
   */
  email?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * src/main/resources/config/promql_node.yaml
   */
  filePath?: string;
  /**
   * @remarks
   * The group name.
   * 
   * This parameter is required.
   * 
   * @example
   * testgroup
   */
  groupName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      bizExtend: 'BizExtend',
      contactDetails: 'ContactDetails',
      contactName: 'ContactName',
      country: 'Country',
      email: 'Email',
      filePath: 'FilePath',
      groupName: 'GroupName',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      bizExtend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      contactDetails: 'string',
      contactName: 'string',
      country: 'string',
      email: 'string',
      filePath: 'string',
      groupName: 'string',
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(this.bizExtend) {
      $dara.Model.validateMap(this.bizExtend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

