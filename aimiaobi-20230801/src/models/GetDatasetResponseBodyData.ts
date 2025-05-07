// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDatasetResponseBodyDataDatasetConfig } from "./GetDatasetResponseBodyDataDatasetConfig";
import { GetDatasetResponseBodyDataDocumentHandleConfig } from "./GetDatasetResponseBodyDataDocumentHandleConfig";


export class GetDatasetResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2024-11-12 21:46:24
   */
  createTime?: string;
  /**
   * @example
   * xxx
   */
  createUser?: string;
  datasetConfig?: GetDatasetResponseBodyDataDatasetConfig;
  /**
   * @example
   * xxx
   */
  datasetDescription?: string;
  /**
   * @example
   * 1
   */
  datasetId?: number;
  /**
   * @example
   * xxx
   */
  datasetName?: string;
  /**
   * @example
   * CustomSemanticSearch
   */
  datasetType?: string;
  documentHandleConfig?: GetDatasetResponseBodyDataDocumentHandleConfig;
  /**
   * @example
   * 1
   */
  searchDatasetEnable?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      datasetConfig: 'DatasetConfig',
      datasetDescription: 'DatasetDescription',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      documentHandleConfig: 'DocumentHandleConfig',
      searchDatasetEnable: 'SearchDatasetEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      datasetConfig: GetDatasetResponseBodyDataDatasetConfig,
      datasetDescription: 'string',
      datasetId: 'number',
      datasetName: 'string',
      datasetType: 'string',
      documentHandleConfig: GetDatasetResponseBodyDataDocumentHandleConfig,
      searchDatasetEnable: 'number',
    };
  }

  validate() {
    if(this.datasetConfig && typeof (this.datasetConfig as any).validate === 'function') {
      (this.datasetConfig as any).validate();
    }
    if(this.documentHandleConfig && typeof (this.documentHandleConfig as any).validate === 'function') {
      (this.documentHandleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

