// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentCodeRuntimesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The runtime architecture.
   * 
   * @example
   * linux/amd64
   */
  architecture?: string;
  /**
   * @remarks
   * The display name of the runtime environment.
   * 
   * @example
   * Python 3.12
   */
  displayName?: string;
  /**
   * @remarks
   * The language runtime environment.
   * 
   * @example
   * python3.12
   */
  languageRuntime?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'architecture',
      displayName: 'displayName',
      languageRuntime: 'languageRuntime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      displayName: 'string',
      languageRuntime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentCodeRuntimesResponseBody extends $dara.Model {
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
   * The list of supported code runtime environments.
   */
  items?: ListAgentCodeRuntimesResponseBodyItems[];
  /**
   * @remarks
   * The actual page size.
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
   * The token for the next page.
   * 
   * @example
   * d3MtYTFiMmMzZDRlNWY2CmNvZGUtcnVudGltZS1leGFtcGxlCjE
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  /**
   * @remarks
   * The number of available runtime environments.
   * 
   * @example
   * 3
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
      items: { 'type': 'array', 'itemType': ListAgentCodeRuntimesResponseBodyItems },
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

