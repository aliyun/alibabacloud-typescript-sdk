// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRoleZoneInfoResponseBodyZoneInfosZoneInfo extends $dara.Model {
  insName?: string;
  nodeType?: string;
  roleId?: string;
  roleType?: string;
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

