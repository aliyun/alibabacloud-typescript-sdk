// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelCatalogResponseBodyModelList extends $dara.Model {
  /**
   * @example
   * {"timeout": 600, "max_retries": 10, "max_retry_delay": 8, "initial_retry_delay": 0.5}
   */
  defaultParams?: string;
  /**
   * @example
   * {\\"deepThink\\":false,\\"onlineSearch\\":true}
   */
  extra?: string;
  /**
   * @example
   * qwen3.5-plus
   */
  modelType?: string;
  paramsExample?: string;
  /**
   * @example
   * bailian
   */
  provider?: string;
  /**
   * @example
   * cn-beijing
   */
  serviceDeployRegion?: string;
  /**
   * @example
   * chat/completions
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      defaultParams: 'defaultParams',
      extra: 'extra',
      modelType: 'modelType',
      paramsExample: 'paramsExample',
      provider: 'provider',
      serviceDeployRegion: 'serviceDeployRegion',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultParams: 'string',
      extra: 'string',
      modelType: 'string',
      paramsExample: 'string',
      provider: 'string',
      serviceDeployRegion: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelCatalogResponseBody extends $dara.Model {
  /**
   * @remarks
   * maxResults
   * 
   * @example
   * 50
   */
  maxResults?: number;
  modelList?: ListModelCatalogResponseBodyModelList[];
  /**
   * @example
   * None
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 819A7F0F-2951-540F-BD94-6A41ECF0281F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      modelList: 'modelList',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      modelList: { 'type': 'array', 'itemType': ListModelCatalogResponseBodyModelList },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modelList)) {
      $dara.Model.validateArray(this.modelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

