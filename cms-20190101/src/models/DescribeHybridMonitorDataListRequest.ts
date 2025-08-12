// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridMonitorDataListRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1653805225
   */
  end?: number;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * For more information about how to query the names of namespaces, see [DescribeHybridMonitorNamespaceList](https://help.aliyun.com/document_detail/428880.html).
   * 
   * This parameter is required.
   * 
   * @example
   * default-aliyun
   */
  namespace?: string;
  /**
   * @remarks
   * The statistical period of the monitoring data.
   * 
   * Unit: seconds.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * >  PromQL statements are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * AliyunEcs_cpu_total
   */
  promSQL?: string;
  regionId?: string;
  /**
   * @remarks
   * The start of the time range to query.
   * 
   * Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1653804865
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      namespace: 'Namespace',
      period: 'Period',
      promSQL: 'PromSQL',
      regionId: 'RegionId',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      namespace: 'string',
      period: 'string',
      promSQL: 'string',
      regionId: 'string',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

