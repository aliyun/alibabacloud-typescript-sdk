// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectorModelsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The description of the model.
   * 
   * @example
   * 通义千问旗舰模型
   */
  description?: string;
  /**
   * @remarks
   * The display name of the model.
   * 
   * @example
   * Qwen3 Max
   */
  displayName?: string;
  /**
   * @remarks
   * Key ID
   * 
   * @example
   * ckey-xxxx
   */
  keyId?: string;
  /**
   * @remarks
   * The key name.
   * 
   * @example
   * default
   */
  keyName?: string;
  /**
   * @remarks
   * The stable identifier of the model.
   * 
   * @example
   * qwen3-max
   */
  modelId?: string;
  /**
   * @remarks
   * The source of the model. Valid values:
   * - official: an official model.
   * - enterprise: an enterprise-specific model.
   * 
   * @example
   * official
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      displayName: 'displayName',
      keyId: 'keyId',
      keyName: 'keyName',
      modelId: 'modelId',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      keyId: 'string',
      keyName: 'string',
      modelId: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorModelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of available models.
   */
  items?: ListConnectorModelsResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned in this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * dGVzdA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-123456
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of models.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListConnectorModelsResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

