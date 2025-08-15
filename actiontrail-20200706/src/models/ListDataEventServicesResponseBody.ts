// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataEventServicesResponseBodyDataServiceInfos extends $dara.Model {
  eventNames?: string[];
  /**
   * @example
   * Cms
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      eventNames: 'EventNames',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventNames: { 'type': 'array', 'itemType': 'string' },
      serviceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventNames)) {
      $dara.Model.validateArray(this.eventNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataEventServicesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * VjE6bHJlTGoxdm1M****
   */
  nextToken?: string;
  serviceInfos?: ListDataEventServicesResponseBodyDataServiceInfos[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      serviceInfos: 'ServiceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      serviceInfos: { 'type': 'array', 'itemType': ListDataEventServicesResponseBodyDataServiceInfos },
    };
  }

  validate() {
    if(Array.isArray(this.serviceInfos)) {
      $dara.Model.validateArray(this.serviceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataEventServicesResponseBody extends $dara.Model {
  data?: ListDataEventServicesResponseBodyData;
  /**
   * @example
   * 851038F3-33AB-4C49-97D7-6AB37D35****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDataEventServicesResponseBodyData,
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

