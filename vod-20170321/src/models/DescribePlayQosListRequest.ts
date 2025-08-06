// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayQosListRequest extends $dara.Model {
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  beginTs?: number;
  definition?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTs?: number;
  itemConfigs?: string;
  metricTypes?: string[];
  network?: string;
  orderName?: string;
  orderType?: string;
  os?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageNo?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  terminalType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      beginTs: 'BeginTs',
      definition: 'Definition',
      endTs: 'EndTs',
      itemConfigs: 'ItemConfigs',
      metricTypes: 'MetricTypes',
      network: 'Network',
      orderName: 'OrderName',
      orderType: 'OrderType',
      os: 'Os',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      terminalType: 'TerminalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      beginTs: 'number',
      definition: 'string',
      endTs: 'number',
      itemConfigs: 'string',
      metricTypes: { 'type': 'array', 'itemType': 'string' },
      network: 'string',
      orderName: 'string',
      orderType: 'string',
      os: 'string',
      pageNo: 'number',
      pageSize: 'number',
      terminalType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metricTypes)) {
      $dara.Model.validateArray(this.metricTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

