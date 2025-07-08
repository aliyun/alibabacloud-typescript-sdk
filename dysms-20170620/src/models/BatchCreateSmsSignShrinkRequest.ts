// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateSmsSignShrinkRequest extends $dara.Model {
  columnIndexMappingRuleShrink?: string;
  extendMessage?: string;
  fileName?: string;
  moreDataShrink?: string;
  operationType?: number;
  ossKeys?: string;
  ownerId?: number;
  prodCode?: string;
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneType?: number;
  serviceType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  signOssKey?: string;
  userViewFileName?: string;
  static names(): { [key: string]: string } {
    return {
      columnIndexMappingRuleShrink: 'ColumnIndexMappingRule',
      extendMessage: 'ExtendMessage',
      fileName: 'FileName',
      moreDataShrink: 'MoreData',
      operationType: 'OperationType',
      ossKeys: 'OssKeys',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sceneType: 'SceneType',
      serviceType: 'ServiceType',
      signOssKey: 'SignOssKey',
      userViewFileName: 'UserViewFileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnIndexMappingRuleShrink: 'string',
      extendMessage: 'string',
      fileName: 'string',
      moreDataShrink: 'string',
      operationType: 'number',
      ossKeys: 'string',
      ownerId: 'number',
      prodCode: 'string',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sceneType: 'number',
      serviceType: 'number',
      signOssKey: 'string',
      userViewFileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

