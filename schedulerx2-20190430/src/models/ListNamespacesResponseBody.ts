// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamespacesResponseBodyDataNamespaces extends $dara.Model {
  /**
   * @remarks
   * The description of the namespace.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * doc
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * 1a72ecb1-b4cc-400a-a71b-20cdec9b****
   */
  UId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      UId: 'UId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      UId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The namespaces and their details.
   */
  namespaces?: ListNamespacesResponseBodyDataNamespaces[];
  static names(): { [key: string]: string } {
    return {
      namespaces: 'Namespaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaces: { 'type': 'array', 'itemType': ListNamespacesResponseBodyDataNamespaces },
    };
  }

  validate() {
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about the namespaces.
   */
  data?: ListNamespacesResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 71BCC0E3-64B2-4B63-A870-AFB64EBCB58C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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
      code: 'number',
      data: ListNamespacesResponseBodyData,
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

