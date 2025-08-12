// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomMetricListRequest extends $dara.Model {
  /**
   * @remarks
   * The dimensions based on which the resources are queried.
   * 
   * @example
   * {sampleName1=value1&amp;sampleName2=value2}
   */
  dimension?: string;
  /**
   * @remarks
   * The ID of the application group.
   * 
   * For information about how to query the IDs of application groups, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/115032.html).
   * 
   * @example
   * 7378****
   */
  groupId?: string;
  /**
   * @remarks
   * The MD5 value of the HTTP request body. The MD5 value is a 128-bit hash value used to verify the uniqueness of the reported monitoring data.
   * 
   * @example
   * 97c25982d9745a231276bff27469****
   */
  md5?: string;
  /**
   * @remarks
   * The name of the custom metric.
   * 
   * @example
   * cpu_total
   */
  metricName?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Pages start from page 1. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      groupId: 'GroupId',
      md5: 'Md5',
      metricName: 'MetricName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      groupId: 'string',
      md5: 'string',
      metricName: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

