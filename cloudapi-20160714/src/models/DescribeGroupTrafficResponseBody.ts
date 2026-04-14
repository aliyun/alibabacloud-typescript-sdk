// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupTrafficResponseBodyTrafficPerSecondMonitorItem extends $dara.Model {
  item?: string;
  itemTime?: string;
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

