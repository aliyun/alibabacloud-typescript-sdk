// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudListSkillRequest extends $dara.Model {
  /**
   * @remarks
   * 描述
   * 
   * @example
   * comment1
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
   * 条数；正整数，默认值是10，最大值是500
   * 
   * @example
   * 10
   */
  limit?: string;
  /**
   * @remarks
   * 技能名称
   * 
   * @example
   * name1
   */
  name?: string;
  /**
   * @remarks
   * 从第几条开始；正整数，默认值是0
   * 
   * @example
   * 0
   */
  offset?: string;
  /**
   * @remarks
   * 排序方式,按照创建时间排序；0正序 1倒序
   * 
   * @example
   * 0
   */
  order?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      enterpriseId: 'EnterpriseId',
      limit: 'Limit',
      name: 'Name',
      offset: 'Offset',
      order: 'Order',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      enterpriseId: 'number',
      limit: 'string',
      name: 'string',
      offset: 'string',
      order: 'number',
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

