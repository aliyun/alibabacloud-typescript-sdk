// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsResponseBodyDatasets extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 1695090077
   */
  createTime?: string;
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * test_dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test dataset
   */
  description?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The update time.
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
      updateTime: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result set.
   */
  datasets?: ListDatasetsResponseBodyDatasets[];
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * d9a48d977f45aa6fcf6981ed13b885b3fab0b124c12dcbbe70edce5d81ba****************
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 96
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      datasets: 'datasets',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasets: { 'type': 'array', 'itemType': ListDatasetsResponseBodyDatasets },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.datasets)) {
      $dara.Model.validateArray(this.datasets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

