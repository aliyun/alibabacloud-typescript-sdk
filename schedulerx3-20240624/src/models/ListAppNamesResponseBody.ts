// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppNamesResponseBodyData extends $dara.Model {
  /**
   * @example
   * test-app
   */
  appGroupId?: string;
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * 15
   */
  id?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appName: 'AppName',
      id: 'Id',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'string',
      appName: 'string',
      id: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppNamesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * .
   */
  data?: ListAppNamesResponseBodyData[];
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * 3881C59F-59F1-5B2E-8110-7D689CA9B207
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListAppNamesResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

