// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskMonitorDataListRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the disks. The value is a JSON array that contains multiple disk IDs. Separate the IDs with commas (,).
   * 
   * @example
   * ["d-bp67acfmxazb4p****","d-bp67acfmxazs5t****"]
   */
  diskIds?: string;
  /**
   * @remarks
   * The end of the time range during which you want to query the near real-time monitoring data of the disks. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-06-01T05:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of entries per page. If you specify this parameter, both `MaxResults` and `NextToken` are used for a paged query.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token that is used in this request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * e71d8a535bd9c****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the list of regions that support CloudLens for EBS.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range during which you want to query the near real-time monitoring data of the disks. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-06-01T03:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The type of the monitoring data. Set the value to pro.
   * 
   * pro: burst performance data, such as burst I/O operations.
   * 
   * This parameter is required.
   * 
   * @example
   * pro
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      diskIds: 'DiskIds',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskIds: 'string',
      endTime: 'string',
      maxResults: 'string',
      nextToken: 'string',
      regionId: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

