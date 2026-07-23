// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNamespaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Namespace ARN
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:123456789:catalog/my_catalog/namespace/my_namespace
   */
  namespaceARN?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceARN: 'NamespaceARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceARN: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * API return code. 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Returned data
   */
  data?: UpdateNamespaceResponseBodyData;
  /**
   * @remarks
   * API return message
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful
   * 
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
      code: 'string',
      data: UpdateNamespaceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

