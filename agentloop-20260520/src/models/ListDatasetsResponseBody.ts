// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsResponseBodyDatasets extends $dara.Model {
  agentSpace?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   */
  createTime?: string;
  datasetName?: string;
  description?: string;
  regionId?: string;
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
  datasets?: ListDatasetsResponseBodyDatasets[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
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

