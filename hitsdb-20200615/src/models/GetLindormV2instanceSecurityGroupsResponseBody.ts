// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormV2InstanceSecurityGroupsResponseBodySgList extends $dara.Model {
  gmtModified?: string;
  ipList?: string;
  isAvailable?: boolean;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtModified: 'GmtModified',
      ipList: 'IpList',
      isAvailable: 'IsAvailable',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModified: 'string',
      ipList: 'string',
      isAvailable: 'boolean',
      securityGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormV2InstanceSecurityGroupsResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  instanceId?: string;
  requestId?: string;
  sgList?: GetLindormV2InstanceSecurityGroupsResponseBodySgList[];
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      sgList: 'SgList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      instanceId: 'string',
      requestId: 'string',
      sgList: { 'type': 'array', 'itemType': GetLindormV2InstanceSecurityGroupsResponseBodySgList },
    };
  }

  validate() {
    if(Array.isArray(this.sgList)) {
      $dara.Model.validateArray(this.sgList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

