// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBlockStatusResponseBodyStatusListBlockStatusList extends $dara.Model {
  /**
   * @remarks
   * The blocking status of the network traffic. Valid values:
   * 
   * *   **areablock**: Network traffic is blocked.
   * *   **normal**: Network traffic is not blocked.
   * 
   * @example
   * areablock
   */
  blockStatus?: string;
  /**
   * @remarks
   * The end time of the blocking. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1540196323
   */
  endTime?: number;
  /**
   * @remarks
   * The Internet service provider (ISP) line from which the traffic is blocked. Valid values:
   * 
   * *   **ct**: China Telecom (International)
   * *   **cut**: China Unicom (International)
   * 
   * @example
   * cut
   */
  line?: string;
  /**
   * @remarks
   * The start time of the blocking. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1540195323
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      blockStatus: 'BlockStatus',
      endTime: 'EndTime',
      line: 'Line',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockStatus: 'string',
      endTime: 'number',
      line: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlockStatusResponseBodyStatusList extends $dara.Model {
  /**
   * @remarks
   * An array that consists of details of the Diversion from Origin Server configuration.
   */
  blockStatusList?: DescribeBlockStatusResponseBodyStatusListBlockStatusList[];
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 203.XX.XX.88
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      blockStatusList: 'BlockStatusList',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockStatusList: { 'type': 'array', 'itemType': DescribeBlockStatusResponseBodyStatusListBlockStatusList },
      ip: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.blockStatusList)) {
      $dara.Model.validateArray(this.blockStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBlockStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of details of the Diversion from Origin Server configurations of the instance.
   */
  statusList?: DescribeBlockStatusResponseBodyStatusList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statusList: { 'type': 'array', 'itemType': DescribeBlockStatusResponseBodyStatusList },
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

