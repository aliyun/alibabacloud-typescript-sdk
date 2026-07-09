// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsResponseBodyDatasets extends $dara.Model {
  /**
   * @remarks
   * The name of the agent space.
   * 
   * @example
   * sop-agent
   */
  agentSpace?: string;
  /**
   * @remarks
   * The time when the dataset was created.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-19T02:11:02Z
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the dataset.
   * 
   * @example
   * product_faq_dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The description of the dataset.
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
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the dataset was last updated.
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
      regionId: 'string',
      updateTime: 'string',
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
   * The maximum number of results specified in this request.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page of results.
   * 
   * If the total number of results exceeds the maxResults limit, the results are truncated. You can use this token to query the next page of results.
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

