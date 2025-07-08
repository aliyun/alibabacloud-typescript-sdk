// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchCreateSmsSignRequestColumnIndexMappingRule } from "./BatchCreateSmsSignRequestColumnIndexMappingRule";


export class BatchCreateSmsSignRequest extends $dara.Model {
  columnIndexMappingRule?: BatchCreateSmsSignRequestColumnIndexMappingRule;
  extendMessage?: string;
  fileName?: string;
  moreData?: string[];
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
      columnIndexMappingRule: 'ColumnIndexMappingRule',
      extendMessage: 'ExtendMessage',
      fileName: 'FileName',
      moreData: 'MoreData',
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
      columnIndexMappingRule: BatchCreateSmsSignRequestColumnIndexMappingRule,
      extendMessage: 'string',
      fileName: 'string',
      moreData: { 'type': 'array', 'itemType': 'string' },
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
    if(this.columnIndexMappingRule && typeof (this.columnIndexMappingRule as any).validate === 'function') {
      (this.columnIndexMappingRule as any).validate();
    }
    if(Array.isArray(this.moreData)) {
      $dara.Model.validateArray(this.moreData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

