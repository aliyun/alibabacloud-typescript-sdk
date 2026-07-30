// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsResponseBodyDatasets extends $dara.Model {
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
   * 2026-01-19T02:11:02Z
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
  isFavorite?: boolean;
  labels?: { [key: string]: string[] };
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The update time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-05-18T02:21:32Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      createTime: 'createTime',
      datasetName: 'datasetName',
      description: 'description',
      isFavorite: 'isFavorite',
      labels: 'labels',
      regionId: 'regionId',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      createTime: 'string',
      datasetName: 'string',
      description: 'string',
      isFavorite: 'boolean',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      regionId: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
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
   * The maximum number of results specified in this request.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * If the total number of results exceeds the maxResults limit, the data is truncated. You can use nextToken to query the next page of data.
   * 
   * @example
   * umaQfI7x758Ns4TgWrj8yA3fYlnk7dJgsfhMrSViRY8=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90F52F93-8800-5A71-8737-18F34BA90166
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 33
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

