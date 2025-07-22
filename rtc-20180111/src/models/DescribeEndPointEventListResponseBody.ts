// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEndPointEventListResponseBodyNodesEventDataItemsEventList extends $dara.Model {
  /**
   * @example
   * 开始发布
   */
  eventName?: string;
  /**
   * @example
   * USER
   */
  eventType?: string;
  /**
   * @example
   * 1614936817
   */
  ts?: number;
  /**
   * @example
   * 1614936817123
   */
  tsInMs?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      eventType: 'EventType',
      ts: 'Ts',
      tsInMs: 'TsInMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventType: 'string',
      ts: 'number',
      tsInMs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponseBodyNodesEventDataItems extends $dara.Model {
  eventList?: DescribeEndPointEventListResponseBodyNodesEventDataItemsEventList[];
  /**
   * @example
   * 1614936817
   */
  ts?: number;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': DescribeEndPointEventListResponseBodyNodesEventDataItemsEventList },
      ts: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventList)) {
      $dara.Model.validateArray(this.eventList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponseBodyNodes extends $dara.Model {
  eventDataItems?: DescribeEndPointEventListResponseBodyNodesEventDataItems[];
  /**
   * @example
   * testuserid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      eventDataItems: 'EventDataItems',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDataItems: { 'type': 'array', 'itemType': DescribeEndPointEventListResponseBodyNodesEventDataItems },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventDataItems)) {
      $dara.Model.validateArray(this.eventDataItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointEventListResponseBody extends $dara.Model {
  nodes?: DescribeEndPointEventListResponseBodyNodes[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeEndPointEventListResponseBodyNodes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

