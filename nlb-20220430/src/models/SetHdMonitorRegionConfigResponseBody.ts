// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetHdMonitorRegionConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the Log Service project.
   * 
   * @example
   * hdmonitor-cn-hangzhou-223794579283657556
   */
  logProject?: string;
  /**
   * @remarks
   * The name of the MetricStore in Simple Log Service.
   * 
   * @example
   * hdmonitor-cn-hangzhou-metricStore-1
   */
  metricStore?: string;
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/2399192.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logProject: 'LogProject',
      metricStore: 'MetricStore',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logProject: 'string',
      metricStore: 'string',
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

