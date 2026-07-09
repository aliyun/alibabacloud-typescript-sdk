// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IndexKey } from "./IndexKey";


export class GetDatasetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The agent space name.
   * 
   * @example
   * sop-agent
   */
  agentSpace?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-06-15T10:30:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * product_faq_dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The dataset description.
   * 
   * @example
   * Product FAQ dataset for semantic search
   */
  description?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D17DE39E-6C62-50E3-9EB7-FDE41BB0D43D
   */
  requestId?: string;
  /**
   * @remarks
   * The table schema of the dataset.
   */
  schema?: { [key: string]: IndexKey };
  /**
   * @remarks
   * The update time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-06-15T11:20:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      createTime: 'createTime',
      datasetName: 'datasetName',
      description: 'description',
      regionId: 'regionId',
      requestId: 'requestId',
      schema: 'schema',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      createTime: 'string',
      datasetName: 'string',
      description: 'string',
      regionId: 'string',
      requestId: 'string',
      schema: { 'type': 'map', 'keyType': 'string', 'valueType': IndexKey },
      updateTime: 'string',
    };
  }

  validate() {
    if(this.schema) {
      $dara.Model.validateMap(this.schema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

