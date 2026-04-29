// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudCreateAgentGroupRequest extends $dara.Model {
  /**
   * @remarks
   * 说明：描述长度不能大于100,需进行UTF-8格式的URLEncode编码
   * 
   * @example
   * comment3
   */
  comment?: string;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 说明：同一企业外呼组编号编号不能重复，外呼组编号长度为2-20，以字母开头,须同时且只能包含字母和数字 同一企业最多可创建1000个外呼组
   * 
   * This parameter is required.
   * 
   * @example
   * WH12
   */
  gno?: string;
  /**
   * @remarks
   * 说明：外呼组名称不能为空，长度不能大于50,需进行UTF-8格式的URLEncode编码
   * 
   * This parameter is required.
   * 
   * @example
   * gpname1
   */
  groupName?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      enterpriseId: 'EnterpriseId',
      gno: 'Gno',
      groupName: 'GroupName',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      enterpriseId: 'number',
      gno: 'string',
      groupName: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

