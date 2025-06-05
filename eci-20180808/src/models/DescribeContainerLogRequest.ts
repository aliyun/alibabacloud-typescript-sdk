// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerLogRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * eci-uf6fonnghi50v6nq****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The name of the container.
   * 
   * This parameter is required.
   * 
   * @example
   * nginx
   */
  containerName?: string;
  /**
   * @remarks
   * Specifies whether to query the logs of the previous container if the container exits and restarts. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  lastTime?: boolean;
  /**
   * @remarks
   * The limit on the total size of logs. Unit: bytes. Valid values: 1 to 1048576(1 MB).
   * 
   * @example
   * 123798
   */
  limitBytes?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the elastic container instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * A relative time in seconds before the current time from which to show logs. Examples: 10, 20, and 30.
   * 
   * @example
   * 10
   */
  sinceSeconds?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the RFC 3339 standard. The time must be in UTC.
   * 
   * @example
   * 2018-08-02T15:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The number of the most recent log entries that you want to query. Default value: 500. Maximum value: 2000.\\
   * A maximum of 1 MB log data can be returned.
   * 
   * @example
   * 500
   */
  tail?: number;
  /**
   * @remarks
   * Specifies whether to return the timestamps of logs. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  timestamps?: boolean;
  static names(): { [key: string]: string } {
    return {
      containerGroupId: 'ContainerGroupId',
      containerName: 'ContainerName',
      lastTime: 'LastTime',
      limitBytes: 'LimitBytes',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sinceSeconds: 'SinceSeconds',
      startTime: 'StartTime',
      tail: 'Tail',
      timestamps: 'Timestamps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupId: 'string',
      containerName: 'string',
      lastTime: 'boolean',
      limitBytes: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sinceSeconds: 'number',
      startTime: 'string',
      tail: 'number',
      timestamps: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

