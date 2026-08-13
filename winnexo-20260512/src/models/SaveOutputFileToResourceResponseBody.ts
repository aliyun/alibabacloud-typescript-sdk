// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveOutputFileToResourceResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * 失败时返回业务错误码（i18n key）
   * 
   * @example
   * string_value
   */
  errorCode?: string;
  /**
   * @remarks
   * 失败时返回错误描述（已按请求 locale 国际化）
   * 
   * @example
   * string_value
   */
  errorMessage?: string;
  /**
   * @remarks
   * 产出明细 ID
   * 
   * @example
   * exampleItemId
   */
  itemId?: string;
  /**
   * @remarks
   * 成功时返回新建的资源 sourceId
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * 操作是否成功
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      itemId: 'itemId',
      sourceId: 'sourceId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      itemId: 'string',
      sourceId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveOutputFileToResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  results?: SaveOutputFileToResourceResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': SaveOutputFileToResourceResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

