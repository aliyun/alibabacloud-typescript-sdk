// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IndexKey } from "./IndexKey";


export class GetDatasetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time the dataset was created, as a Unix timestamp.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 1695090077
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * test_dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The description of the dataset.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the region where the dataset is located.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The unique identifier for the request.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * The data schema of the dataset.
   */
  schema?: { [key: string]: IndexKey };
  /**
   * @remarks
   * The time the dataset was last updated, as a Unix timestamp.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 1695090077
   */
  updateTime?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * workspace-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      datasetName: 'datasetName',
      description: 'description',
      regionId: 'regionId',
      requestId: 'requestId',
      schema: 'schema',
      updateTime: 'updateTime',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      datasetName: 'string',
      description: 'string',
      regionId: 'string',
      requestId: 'string',
      schema: { 'type': 'map', 'keyType': 'string', 'valueType': IndexKey },
      updateTime: 'string',
      workspace: 'string',
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

