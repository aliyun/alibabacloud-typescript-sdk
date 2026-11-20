// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelCatalogResponseBodyModelList extends $dara.Model {
  /**
   * @remarks
   * The default parameters.
   * 
   * @example
   * {"timeout": 600, "max_retries": 10, "max_retry_delay": 8, "initial_retry_delay": 0.5}
   */
  defaultParams?: string;
  /**
   * @remarks
   * The additional parameters.
   * 
   * @example
   * {\\"deepThink\\":false,\\"onlineSearch\\":true}
   */
  extra?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen3.5-plus
   */
  modelType?: string;
  /**
   * @remarks
   * The parameter example.
   * 
   * @example
   * {
   *     "extra_body": {
   *         "translation_options": {
   *             "source_lang": "zh",
   *             "domains": "The sentence is from Ali Cloud IT domain. ", 
   *             "terms": [
   *                 {
   *                     "source": "Biosensor",
   *                     "target": "biological sensor"
   *                 },
   *                 {
   *                     "source": "Physical health status",
   *                     "target": "health status of the body"
   *                 }
   *             ],
   *             "tm_list": [
   *                 {
   *                     "source": "You can use one of the following methods to view the kernel version information of a cluster:",
   *                     "target": "You can use one of the following methods to query the engine version of a cluster:"
   *                 }
   *             ]
   *         }
   *     }
   * }
   */
  paramsExample?: string;
  /**
   * @remarks
   * The underlying model provider.
   * 
   * @example
   * bailian
   */
  provider?: string;
  /**
   * @remarks
   * The deployment region.
   * 
   * @example
   * cn-beijing
   */
  serviceDeployRegion?: string;
  /**
   * @remarks
   * Specifies whether the model service can be accessed by using an API key.
   * 
   * @example
   * true
   */
  supportApiKeyAccess?: boolean;
  /**
   * @remarks
   * The model purpose.
   * 
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
      supportApiKeyAccess: 'supportApiKeyAccess',
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
      supportApiKeyAccess: 'boolean',
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
  /**
   * @remarks
   * The list of models.
   */
  modelList?: ListModelCatalogResponseBodyModelList[];
  /**
   * @remarks
   * The pagination token. Set this parameter to the value of NextToken returned from the previous API call.
   * 
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

