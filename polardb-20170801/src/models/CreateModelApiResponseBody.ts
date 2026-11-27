// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The model category.
   * 
   * @example
   * text
   */
  category?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-11-09T06:43:33Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2026-11-09T06:43:33Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The invocation endpoint.
   * 
   * @example
   * https://model-api.example.com/v1/chat/completions
   */
  invokeEndpoint?: string;
  /**
   * @remarks
   * The model API ID.
   * 
   * @example
   * mi-xxxxxx
   */
  modelApiId?: string;
  /**
   * @remarks
   * The saved model name mappings, returned as a JSON array string. This parameter is empty if no mappings are configured.
   * 
   * @example
   * [{"Source":"client-model-a","Target":"upstream-model-a"}]
   */
  modelMappings?: string;
  /**
   * @remarks
   * The name of the model API.
   * 
   * @example
   * jev-chat-api
   */
  name?: string;
  /**
   * @remarks
   * The invocation path prefix.
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
   * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
   */
  requestId?: string;
  /**
   * @remarks
   * The saved routing rules, returned as a JSON string. A byte-by-byte exact echo is not guaranteed.
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
   * Enable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      invokeEndpoint: 'InvokeEndpoint',
      modelApiId: 'ModelApiId',
      modelMappings: 'ModelMappings',
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
      invokeEndpoint: 'string',
      modelApiId: 'string',
      modelMappings: 'string',
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

