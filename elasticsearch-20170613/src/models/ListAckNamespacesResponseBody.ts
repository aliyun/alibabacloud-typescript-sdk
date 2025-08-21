// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAckNamespacesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The namespace of the cluster.
   * 
   * @example
   * logging
   */
  namespace?: string;
  /**
   * @remarks
   * The status of the namespace.
   * 
   * @example
   * Active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAckNamespacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 95789100-A329-473B-9D14-9E0B7DB4BD5A
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListAckNamespacesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAckNamespacesResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

