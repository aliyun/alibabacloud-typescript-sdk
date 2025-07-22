// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsageOverallDataResponseBodyUsageOverallDataNodes extends $dara.Model {
  /**
   * @example
   * 1615824000
   */
  x?: string;
  /**
   * @example
   * 1
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsageOverallDataResponseBodyUsageOverallData extends $dara.Model {
  nodes?: DescribeUsageOverallDataResponseBodyUsageOverallDataNodes[];
  /**
   * @example
   * ONLINE_USER_PEAK
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeUsageOverallDataResponseBodyUsageOverallDataNodes },
      type: 'string',
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

export class DescribeUsageOverallDataResponseBody extends $dara.Model {
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  usageOverallData?: DescribeUsageOverallDataResponseBodyUsageOverallData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      usageOverallData: 'UsageOverallData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      usageOverallData: { 'type': 'array', 'itemType': DescribeUsageOverallDataResponseBodyUsageOverallData },
    };
  }

  validate() {
    if(Array.isArray(this.usageOverallData)) {
      $dara.Model.validateArray(this.usageOverallData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

