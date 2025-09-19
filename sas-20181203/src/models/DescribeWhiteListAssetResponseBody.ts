// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhiteListAssetResponseBodyAssets extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the server can be selected. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  allowSelected?: number;
  /**
   * @remarks
   * The group ID of the server.
   * 
   * @example
   * 11028551
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the server.
   * 
   * @example
   * 1001
   */
  id?: number;
  /**
   * @remarks
   * The IP address of the server.
   * 
   * @example
   * 121.41.XX.XX
   */
  machineIp?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * test
   */
  machineName?: string;
  /**
   * @remarks
   * Indicates whether the server is selected. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 0
   */
  selected?: number;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 5c081b02-f66a-47a4-bd2f-79ee3eaf806a
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      allowSelected: 'AllowSelected',
      groupId: 'GroupId',
      id: 'Id',
      machineIp: 'MachineIp',
      machineName: 'MachineName',
      selected: 'Selected',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowSelected: 'number',
      groupId: 'number',
      id: 'number',
      machineIp: 'string',
      machineName: 'string',
      selected: 'number',
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

export class DescribeWhiteListAssetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the servers.
   */
  assets?: DescribeWhiteListAssetResponseBodyAssets[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3D7C47D-3F11-57BB-90E8-E5C20C61****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assets: 'Assets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assets: { 'type': 'array', 'itemType': DescribeWhiteListAssetResponseBodyAssets },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assets)) {
      $dara.Model.validateArray(this.assets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

