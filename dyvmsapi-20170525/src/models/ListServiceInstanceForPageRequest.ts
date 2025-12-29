// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceForPageRequestPager extends $dara.Model {
  /**
   * @remarks
   * 当前页码
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * 每页数量，默认10，最大100
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceForPageRequest extends $dara.Model {
  /**
   * @remarks
   * 服务实例号
   * 
   * @example
   * 0571****1234
   */
  code?: string;
  ownerId?: number;
  pager?: ListServiceInstanceForPageRequestPager;
  /**
   * @remarks
   * 关联实体号码
   * 
   * @example
   * 131****1111
   */
  relationNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 场景ID
   * 
   * @example
   * 56
   */
  sceneId?: number;
  /**
   * @remarks
   * 用途ID
   * 
   * @example
   * 89
   */
  usageId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ownerId: 'OwnerId',
      pager: 'Pager',
      relationNumber: 'RelationNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneId: 'SceneId',
      usageId: 'UsageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      ownerId: 'number',
      pager: ListServiceInstanceForPageRequestPager,
      relationNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneId: 'number',
      usageId: 'number',
    };
  }

  validate() {
    if(this.pager && typeof (this.pager as any).validate === 'function') {
      (this.pager as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

