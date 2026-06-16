// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IndexKey } from "./IndexKey";


export class GetDatasetResponseBody extends $dara.Model {
  agentSpace?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   */
  createTime?: string;
  datasetName?: string;
  description?: string;
  regionId?: string;
  requestId?: string;
  schema?: { [key: string]: IndexKey };
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
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

