// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNamespaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The namespace UID.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespaceUid?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceUid: 'NamespaceUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The namespace information.
   */
  data?: CreateNamespaceResponseBodyData;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * namespace=test3 is existed, noting update
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4F68ABED-AC31-4412-9297-D9A8F0401108
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The namespace was successfully created.
   * 
   * - **false**: The namespace failed to be created.
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
      data: CreateNamespaceResponseBodyData,
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

