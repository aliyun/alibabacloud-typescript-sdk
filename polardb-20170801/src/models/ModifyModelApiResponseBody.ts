// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyModelApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The category of the model.
   * 
   * @example
   * text
   */
  category?: string;
  /**
   * @remarks
   * The time when the model API was created.
   * 
   * @example
   * 2026-11-09T06:43:33Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the model API was last updated.
   * 
   * @example
   * 2026-11-09T06:43:33Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the model API.
   * 
   * @example
   * mi-xxxxx
   */
  modelApiId?: string;
  /**
   * @remarks
   * The current model name mappings, returned as a JSON array string. This parameter is empty if no mappings are configured.
   * 
   * @example
   * [{"Source":"client-model-a","Target":"upstream-model-a"}]
   */
  modelMappings?: string;
  /**
   * @remarks
   * The current intelligent routing candidate list, returned as a JSON object string.
   * 
   * @example
   * {"AllowedModels":["deepseek-v4-pro","glm-5.3","glm-5.3-flash"]}
   */
  modelRouting?: string;
  /**
   * @remarks
   * The updated name of the model API.
   * 
   * @example
   * jev-chat-api
   */
  name?: string;
  /**
   * @remarks
   * The API path prefix.
   * 
   * @example
   * /jev/v1
   */
  pathPrefix?: string;
  /**
   * @remarks
   * The access protocol.
   * 
   * @example
   * openai-chat
   */
  protocol?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 925B84D9-CA72-432C-95CF-738C22******
   */
  requestId?: string;
  /**
   * @remarks
   * The current routing rules, returned as a JSON string. A byte-for-byte exact match of the input is not guaranteed.
   * 
   * @example
   * [{"RuleName":"default","Providers":[{"ModelServiceName":"model-service-a","ModelList":"[\\"deepseek-v4-pro\\"]","Weight":100}]}]
   */
  routeRules?: string;
  /**
   * @remarks
   * The status of the model API.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      modelApiId: 'ModelApiId',
      modelMappings: 'ModelMappings',
      modelRouting: 'ModelRouting',
      name: 'Name',
      pathPrefix: 'PathPrefix',
      protocol: 'Protocol',
      requestId: 'RequestId',
      routeRules: 'RouteRules',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      modelApiId: 'string',
      modelMappings: 'string',
      modelRouting: 'string',
      name: 'string',
      pathPrefix: 'string',
      protocol: 'string',
      requestId: 'string',
      routeRules: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

