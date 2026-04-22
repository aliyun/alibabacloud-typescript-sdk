// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationLogsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  componentName?: string;
  containerName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2026-03-25T02:11:00Z
   */
  endTime?: string;
  /**
   * @example
   * Config
   */
  keyword?: string;
  /**
   * @example
   * WARN
   */
  level?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2026-03-25T01:57:00Z
   */
  startTime?: string;
  /**
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

