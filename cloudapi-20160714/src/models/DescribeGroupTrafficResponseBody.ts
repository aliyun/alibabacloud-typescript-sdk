// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupTrafficResponseBodyTrafficPerSecondMonitorItem extends $dara.Model {
  /**
   * @remarks
   * The metric. Valid values:
   * 
   * *   inbound: traffic consumed by requests
   * *   outbound: traffic consumed by responses
   * 
   * @example
   * inbound
   */
  item?: string;
  /**
   * @remarks
   * The corresponding time. The time follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2023-01-29T01:30:00Z
   */
  itemTime?: string;
  /**
   * @remarks
   * The traffic volume per second.
   * 
   * @example
   * 100.0
   */
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      itemTime: 'string',
      itemValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupTrafficResponseBodyTrafficPerSecond extends $dara.Model {
  monitorItem?: DescribeGroupTrafficResponseBodyTrafficPerSecondMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeGroupTrafficResponseBodyTrafficPerSecondMonitorItem },
    };
  }

  validate() {
    if(Array.isArray(this.monitorItem)) {
      $dara.Model.validateArray(this.monitorItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupTrafficResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EF924FE4-2EDD-4CD3-89EC-34E4708574E7
   */
  requestId?: string;
  /**
   * @remarks
   * The traffic information per second.
   */
  trafficPerSecond?: DescribeGroupTrafficResponseBodyTrafficPerSecond;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficPerSecond: 'TrafficPerSecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficPerSecond: DescribeGroupTrafficResponseBodyTrafficPerSecond,
    };
  }

  validate() {
    if(this.trafficPerSecond && typeof (this.trafficPerSecond as any).validate === 'function') {
      (this.trafficPerSecond as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

