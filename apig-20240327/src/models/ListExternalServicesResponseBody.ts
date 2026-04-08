// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExternalServicesResponseBodyDataItemsServices extends $dara.Model {
  name?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      namespace: 'namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class ListExternalServicesResponseBodyDataItems extends $dara.Model {
  namespace?: string;
  namespaceShowName?: string;
  services?: ListExternalServicesResponseBodyDataItemsServices[];
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      namespaceShowName: 'namespaceShowName',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      namespaceShowName: 'string',
      services: { 'type': 'array', 'itemType': ListExternalServicesResponseBodyDataItemsServices },
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExternalServicesResponseBodyData extends $dara.Model {
  items?: ListExternalServicesResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListExternalServicesResponseBodyDataItems },
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

export class ListExternalServicesResponseBody extends $dara.Model {
  code?: string;
  data?: ListExternalServicesResponseBodyData;
  message?: string;
  /**
   * @remarks
   * Id of the request
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
      data: ListExternalServicesResponseBodyData,
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

