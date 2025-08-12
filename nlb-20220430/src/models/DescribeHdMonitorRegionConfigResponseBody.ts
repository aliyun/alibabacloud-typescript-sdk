// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHdMonitorRegionConfigResponseBody extends $dara.Model {
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
   * The name of the Metricstore in Simple Log Service.
   * 
   * @example
   * hdmonitor-cn-hangzhou-metricStore-1
   */
  metricStore?: string;
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to obtain the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
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

