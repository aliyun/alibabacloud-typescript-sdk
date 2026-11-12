// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventBusesResponseBodyDataEventBusesTags extends $dara.Model {
  /**
   * @remarks
   * The key of the event bus tag.
   * 
   * @example
   * department
   */
  key?: string;
  /**
   * @remarks
   * The value of the event bus tag.
   * 
   * @example
   * R&D
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventBusesResponseBodyDataEventBuses extends $dara.Model {
  /**
   * @remarks
   * The creation timestamp.
   * 
   * @example
   * 1607071602000
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * bus_description
   */
  description?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the event bus.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:12345678909****:eventbus/default
   */
  eventBusARN?: string;
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * default
   */
  eventBusName?: string;
  /**
   * @remarks
   * The ID of the resource group to which the event bus belongs.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tag information of the event bus.
   */
  tags?: ListEventBusesResponseBodyDataEventBusesTags[];
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'CreateTimestamp',
      description: 'Description',
      eventBusARN: 'EventBusARN',
      eventBusName: 'EventBusName',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      description: 'string',
      eventBusARN: 'string',
      eventBusName: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListEventBusesResponseBodyDataEventBusesTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventBusesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of queried event buses.
   */
  eventBuses?: ListEventBusesResponseBodyDataEventBuses[];
  /**
   * @remarks
   * The pagination token. This token is returned if more results are available.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      eventBuses: 'EventBuses',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBuses: { 'type': 'array', 'itemType': ListEventBusesResponseBodyDataEventBuses },
      nextToken: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventBuses)) {
      $dara.Model.validateArray(this.eventBuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventBusesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code:
   * - Success: indicates that the request is successful.                                 
   * - Other values: indicate error codes. For more information, see Error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListEventBusesResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * InvalidArgument
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D1DCF64A-3F2C-5323-ADCB-3F4DF30F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. A value of true indicates that the operation is successful.
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
      data: ListEventBusesResponseBodyData,
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

