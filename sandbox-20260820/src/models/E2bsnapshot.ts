// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class E2BSnapshot extends $dara.Model {
  /**
   * @remarks
   * The CPU specifications of the snapshot.
   * 
   * @example
   * 2
   */
  cpuCount?: number;
  /**
   * @remarks
   * The creation time of the snapshot.
   * 
   * @example
   * 1793685726000
   */
  createdTime?: string;
  /**
   * @remarks
   * The expiration time of the snapshot.
   * 
   * @example
   * 1796277726000
   */
  expiredTime?: string;
  /**
   * @remarks
   * The memory specifications of the snapshot.
   * 
   * @example
   * 4
   */
  memoryMB?: number;
  /**
   * @remarks
   * The short name of the snapshot.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-****
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * 0d66****b374
   */
  snapshotID?: string;
  /**
   * @remarks
   * The source sandbox ID.
   * 
   * @example
   * sbx-****
   */
  sourceSandboxID?: string;
  /**
   * @remarks
   * The snapshot status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The snapshot tag.
   * 
   * @example
   * tag
   */
  tag?: string;
  /**
   * @remarks
   * The team ID.
   * 
   * @example
   * 9A66****b892
   */
  teamID?: string;
  /**
   * @remarks
   * The team name.
   * 
   * @example
   * teamName
   */
  teamName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 155****
   */
  userID?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCount: 'cpuCount',
      createdTime: 'createdTime',
      expiredTime: 'expiredTime',
      memoryMB: 'memoryMB',
      name: 'name',
      resourceGroupID: 'resourceGroupID',
      snapshotID: 'snapshotID',
      sourceSandboxID: 'sourceSandboxID',
      status: 'status',
      tag: 'tag',
      teamID: 'teamID',
      teamName: 'teamName',
      userID: 'userID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCount: 'number',
      createdTime: 'string',
      expiredTime: 'string',
      memoryMB: 'number',
      name: 'string',
      resourceGroupID: 'string',
      snapshotID: 'string',
      sourceSandboxID: 'string',
      status: 'string',
      tag: 'string',
      teamID: 'string',
      teamName: 'string',
      userID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

