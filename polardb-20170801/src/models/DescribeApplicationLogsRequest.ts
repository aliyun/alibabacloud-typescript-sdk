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
   * The subcomponent instance ID.
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
   * The end of the time range to query. Specify the time in the `yyyy-MM-ddTHH:mmZ` format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-03-25T02:11Z
   */
  endTime?: string;
  /**
   * @remarks
   * The search keyword. This parameter is used for PolarClaw instances.
   * 
   * @example
   * Config
   */
  keyword?: string;
  /**
   * @remarks
   * The log level. This parameter is used for PolarClaw instances.
   * 
   * @example
   * WARN
   */
  level?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **30**. Valid values: 30 to 100.
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
   * The beginning of the time range to query. Specify the time in the `YYYY-MM-DDThh:mmZ` format (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-03-25T01:57Z
   */
  startTime?: string;
  /**
   * @remarks
   * The log type. This parameter is used for PolarClaw instances. Currently, only gateway is supported.
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

