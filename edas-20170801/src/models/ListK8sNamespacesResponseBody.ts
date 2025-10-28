// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListK8sNamespacesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The namespaces of the Kubernetes cluster.
   * 
   * @example
   * development
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sNamespacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data that is returned.
   */
  data?: ListK8sNamespacesResponseBodyData[];
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 57F146F6-3C94-****-****-A66EF4B9*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListK8sNamespacesResponseBodyData },
      message: 'string',
      requestId: 'string',
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

