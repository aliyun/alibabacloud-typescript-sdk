// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLdpsComputeGroupsResponseBodyGroupList extends $dara.Model {
  exceptionInfo?: string;
  groupName?: string;
  isDefault?: boolean;
  properties?: { [key: string]: any };
  rayInteractiveAccessAddr?: string;
  rayVpcWebUIAddr?: string;
  state?: string;
  webUI?: string;
  static names(): { [key: string]: string } {
    return {
      exceptionInfo: 'ExceptionInfo',
      groupName: 'GroupName',
      isDefault: 'IsDefault',
      properties: 'Properties',
      rayInteractiveAccessAddr: 'RayInteractiveAccessAddr',
      rayVpcWebUIAddr: 'RayVpcWebUIAddr',
      state: 'State',
      webUI: 'WebUI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionInfo: 'string',
      groupName: 'string',
      isDefault: 'boolean',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rayInteractiveAccessAddr: 'string',
      rayVpcWebUIAddr: 'string',
      state: 'string',
      webUI: 'string',
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLdpsComputeGroupsResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  groupList?: ListLdpsComputeGroupsResponseBodyGroupList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      groupList: 'GroupList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      groupList: { 'type': 'array', 'itemType': ListLdpsComputeGroupsResponseBodyGroupList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupList)) {
      $dara.Model.validateArray(this.groupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

