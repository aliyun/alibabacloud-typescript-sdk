// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * The version of the anti-ransomware policy. Valid values:
   * 
   * *   **1.0.0**
   * *   **2.0.0**
   * 
   * This parameter is required.
   * 
   * @example
   * 2.0.0
   */
  apiVersion?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether the server is an Elastic Compute Service (ECS) instance. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  isAliYunEcs?: string;
  /**
   * @remarks
   * The region in which the server resides.
   * 
   * >  If the Uuid parameter is not specified, this parameter is required.
   * 
   * @example
   * us-east-1
   */
  machineRegion?: string;
  /**
   * @remarks
   * The name or IP address of the server.
   * 
   * @example
   * 192.168.XX.XX
   */
  machineRemark?: string;
  /**
   * @remarks
   * The starting position of the query. If this parameter is left empty, the query starts from the beginning.
   * 
   * >  If you call the operation for the first time, you do not need to specify the parameter. The response to the first call contains the token that can be used for the second call. Each subsequent response contains the token that can be used for the next call.
   * 
   * @example
   * CAESGgoSChAKDGNvbXBsZXRlVGltZRABCgQiAggAGAAiQAoJAB4SwmEAAAAACjMDLgAAADFTNzMyZDMwMzAzMDM0NzY3YTZjNjI3NjZmNmU3MjcxNjk3NDY5MzY3MjY4****
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of backup snapshots from which data can be restored. Valid values:
   * 
   * *   **COMPLETE**: complete
   * *   **PARTIAL_COMPLETE**: partial complete
   * 
   * @example
   * ["COMPLETE"]
   */
  statusList?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * >  You can call the [DescribeBackupPolicy](~~DescribeBackupPolicy~~) operation to query the UUIDs of servers.
   * 
   * @example
   * 061d8042-59ff-416e-bc33-294a1cf5****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      currentPage: 'CurrentPage',
      isAliYunEcs: 'IsAliYunEcs',
      machineRegion: 'MachineRegion',
      machineRemark: 'MachineRemark',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      statusList: 'StatusList',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      currentPage: 'number',
      isAliYunEcs: 'string',
      machineRegion: 'string',
      machineRemark: 'string',
      nextToken: 'string',
      pageSize: 'number',
      statusList: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

