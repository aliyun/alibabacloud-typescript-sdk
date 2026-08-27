// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListK8sClusterSourcesResponseBodyDataItems extends $dara.Model {
  /**
   * @example
   * c4a21b3560fad4ec***
   */
  clusterId?: string;
  /**
   * @example
   * itemcenter-dev-cluster
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sClusterSourcesResponseBodyData extends $dara.Model {
  items?: ListK8sClusterSourcesResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListK8sClusterSourcesResponseBodyDataItems },
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

export class ListK8sClusterSourcesResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: ListK8sClusterSourcesResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 043360DA-ED3B-5386-9B7A-D94DECF99A30
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
      data: ListK8sClusterSourcesResponseBodyData,
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

