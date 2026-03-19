// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPptTemplatesResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://xxx.com/a.png
   */
  coverImg?: string;
  /**
   * @remarks
   * ID
   * 
   * @example
   * 10
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      coverImg: 'CoverImg',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverImg: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPptTemplatesResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  data?: ListPptTemplatesResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * +CBOXvu2YLxC6DOua8Qupg==
   */
  nextToken?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListPptTemplatesResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

