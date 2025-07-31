// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRoleZoneInfoResponseBodyZoneInfosZoneInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * dds-bpxxxxxxxx
   */
  insName?: string;
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * *   **normal**
   * *   **configServer**
   * *   **shard**
   * *   **mongos**
   * 
   * > Valid value for replica set instances: **normal**. Valid values for sharded cluster instances: **configServer**, **shard**, and **mongos**.
   * 
   * @example
   * normal
   */
  nodeType?: string;
  /**
   * @remarks
   * The role ID.
   * 
   * @example
   * 83xxxxx
   */
  roleId?: string;
  /**
   * @remarks
   * The role of the node. Valid values:
   * 
   * *   **Primary**
   * *   **Secondary**
   * *   **Hidden**
   * 
   * @example
   * Primary
   */
  roleType?: string;
  /**
   * @remarks
   * The zone ID of the node.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      insName: 'InsName',
      nodeType: 'NodeType',
      roleId: 'RoleId',
      roleType: 'RoleType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insName: 'string',
      nodeType: 'string',
      roleId: 'string',
      roleType: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoResponseBodyZoneInfos extends $dara.Model {
  zoneInfo?: DescribeRoleZoneInfoResponseBodyZoneInfosZoneInfo[];
  static names(): { [key: string]: string } {
    return {
      zoneInfo: 'ZoneInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneInfo: { 'type': 'array', 'itemType': DescribeRoleZoneInfoResponseBodyZoneInfosZoneInfo },
    };
  }

  validate() {
    if(Array.isArray(this.zoneInfo)) {
      $dara.Model.validateArray(this.zoneInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 728B9A96-E262-4AE5-915E-3A51CCE2FDA9
   */
  requestId?: string;
  /**
   * @remarks
   * The information of nodes in the zone.
   */
  zoneInfos?: DescribeRoleZoneInfoResponseBodyZoneInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zoneInfos: 'ZoneInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zoneInfos: DescribeRoleZoneInfoResponseBodyZoneInfos,
    };
  }

  validate() {
    if(this.zoneInfos && typeof (this.zoneInfos as any).validate === 'function') {
      (this.zoneInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

