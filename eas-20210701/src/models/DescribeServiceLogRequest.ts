// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceLogRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the container that runs the service.
   * 
   * @example
   * worker0
   */
  containerName?: string;
  /**
   * @remarks
   * The end of the time range to query. The time must be in UTC.
   * 
   * @example
   * 2006-01-02 15:04:05
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the instance that runs the service. For more information about how to query the instance name, see [ListServiceInstances](https://help.aliyun.com/document_detail/412108.html).
   * 
   * @example
   * echo-da290ac8-7fckm
   */
  instanceName?: string;
  /**
   * @remarks
   * The IP address of the instance whose logs you want to query. For more information about how to query the IP address of an instance, see [ListServiceInstances](https://help.aliyun.com/document_detail/412108.html).
   * 
   * @example
   * 10.0.0.1
   */
  ip?: string;
  /**
   * @remarks
   * The keyword that you use to query the logs of the service.
   * 
   * @example
   * key
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 500.
   * 
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to query the logs that are generated before the instance last restarts. This parameter is available only if the instance restarts.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  previous?: boolean;
  /**
   * @remarks
   * The beginning of the time range to query. The time must be in Coordinated Universal Time (UTC).
   * 
   * @example
   * 2006-01-02 15:04:05
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      containerName: 'ContainerName',
      endTime: 'EndTime',
      instanceName: 'InstanceName',
      ip: 'Ip',
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      previous: 'Previous',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerName: 'string',
      endTime: 'string',
      instanceName: 'string',
      ip: 'string',
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      previous: 'boolean',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

