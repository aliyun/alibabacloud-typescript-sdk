// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpenIpAccessSrcStatResponseBodyStatList extends $dara.Model {
  /**
   * @remarks
   * The number of abnormal source IP addresses.
   * 
   * @example
   * 12
   */
  abnormalSrcIp?: number;
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * HTTP
   */
  app?: string;
  /**
   * @remarks
   * The number of normal source IP addresses.
   * 
   * @example
   * 21
   */
  normalSrcIp?: number;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 6163
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalSrcIp: 'AbnormalSrcIp',
      app: 'App',
      normalSrcIp: 'NormalSrcIp',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalSrcIp: 'number',
      app: 'string',
      normalSrcIp: 'number',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOpenIpAccessSrcStatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0DC783F1-B3A7-578D-8A63-*****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of statistics.
   */
  statList?: DescribeOpenIpAccessSrcStatResponseBodyStatList[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statList: 'StatList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statList: { 'type': 'array', 'itemType': DescribeOpenIpAccessSrcStatResponseBodyStatList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.statList)) {
      $dara.Model.validateArray(this.statList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

