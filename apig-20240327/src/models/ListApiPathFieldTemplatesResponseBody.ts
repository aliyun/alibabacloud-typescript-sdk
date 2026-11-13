// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiPathFieldTemplatesResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The API request path corresponding to the field template.
   * 
   * @example
   * /v1/chat/completions
   */
  path?: string;
  /**
   * @remarks
   * The API protocol applicable to the field template.
   * 
   * @example
   * openai
   */
  protocol?: string;
  /**
   * @remarks
   * The field template ID.
   * 
   * @example
   * atpl-ec5df7baf496bfac
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'path',
      protocol: 'protocol',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      protocol: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiPathFieldTemplatesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of field templates. The list element is named items, and each element is a field template record that contains the templateId, path, and protocol.
   */
  items?: ListApiPathFieldTemplatesResponseBodyDataItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListApiPathFieldTemplatesResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
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

export class ListApiPathFieldTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListApiPathFieldTemplatesResponseBodyData;
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
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListApiPathFieldTemplatesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

