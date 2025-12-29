// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceForPageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 服务实例号
   * 
   * @example
   * 0571****1234
   */
  code?: string;
  ownerId?: number;
  pagerShrink?: string;
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
      pagerShrink: 'Pager',
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
      pagerShrink: 'string',
      relationNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneId: 'number',
      usageId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

