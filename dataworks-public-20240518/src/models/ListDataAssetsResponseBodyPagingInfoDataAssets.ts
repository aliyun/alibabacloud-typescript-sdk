// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataAssetsResponseBodyPagingInfoDataAssetsDataAssetTagMappings } from "./ListDataAssetsResponseBodyPagingInfoDataAssetsDataAssetTagMappings";


export class ListDataAssetsResponseBodyPagingInfoDataAssets extends $dara.Model {
  /**
   * @remarks
   * The mappings between data assets and tags.
   */
  dataAssetTagMappings?: ListDataAssetsResponseBodyPagingInfoDataAssetsDataAssetTagMappings[];
  /**
   * @remarks
   * The environment of the workspace to which the data asset belongs. Valid values:
   * 
   * *   Dev: development environment
   * *   Prod: production environment
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The data asset ID.
   * 
   * @example
   * 7259557313
   */
  id?: string;
  /**
   * @remarks
   * The name of the data asset.
   * 
   * @example
   * ali_cn_es_gfn
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 54275
   */
  projectId?: number;
  /**
   * @remarks
   * The type of the data asset. Valid values:
   * 
   * *   ACS::DataWorks::Table
   * *   ACS::DataWorks::Task
   * 
   * @example
   * ACS::DataWorks::Task
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataAssetTagMappings: 'DataAssetTagMappings',
      envType: 'EnvType',
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataAssetTagMappings: { 'type': 'array', 'itemType': ListDataAssetsResponseBodyPagingInfoDataAssetsDataAssetTagMappings },
      envType: 'string',
      id: 'string',
      name: 'string',
      projectId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataAssetTagMappings)) {
      $dara.Model.validateArray(this.dataAssetTagMappings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

