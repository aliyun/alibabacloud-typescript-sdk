// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExternalServicesResponseBodyDataItemsServices extends $dara.Model {
  /**
   * @example
   * enable-slash-merge
   */
  name?: string;
  /**
   * @example
   * public
   */
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
  /**
   * @example
   * PUBLIC
   */
  namespace?: string;
  /**
   * @example
   * PUBLIC
   */
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
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: ListExternalServicesResponseBodyData;
  /**
   * @example
   * Failed to upload data. Please try again
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D9B03B59-B2D6-51B0-A7E9-AF8466E320CA
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

