// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The component instance ID.
   * 
   * @example
   * pac-xxx
   */
  componentName?: string;
  /**
   * @remarks
   * The container name.
   * 
   * @example
   * analytics
   */
  containerName?: string;
  /**
   * @remarks
   * The end time for the query. Specify the time in `YYYY-MM-DDTHH:mmZ` format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-03-25T02:11:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The keyword to search for. This parameter applies only to polarclaw instances.
   * 
   * @example
   * Config
   */
  keyword?: string;
  /**
   * @remarks
   * The log level. This parameter applies only to polarclaw instances.
   * 
   * @example
   * WARN
   */
  level?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number to return. The default value is 1.
   * 
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **30**. Valid values: 30 to 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The start time for the query. Specify the time in `YYYY-MM-DDTHH:mmZ` format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-03-25T01:57:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The log type. This parameter applies only to polarclaw instances. Currently, only `gateway` is supported.
   * 
   * @example
   * gateway
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      componentName: 'ComponentName',
      containerName: 'ContainerName',
      endTime: 'EndTime',
      keyword: 'Keyword',
      level: 'Level',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      componentName: 'string',
      containerName: 'string',
      endTime: 'string',
      keyword: 'string',
      level: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
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

