// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityIPGroupRelationResponseBodyDataGlobalSecurityIPGroupRel extends $dara.Model {
  /**
   * @example
   * 192.168.0.1,192.168.100.0/24
   */
  GIpList?: string;
  /**
   * @example
   * saas_jump
   */
  globalIgName?: string;
  /**
   * @example
   * g-v8kwereyd6u7kx****
   */
  globalSecurityGroupId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      GIpList: 'GIpList',
      globalIgName: 'GlobalIgName',
      globalSecurityGroupId: 'GlobalSecurityGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GIpList: 'string',
      globalIgName: 'string',
      globalSecurityGroupId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIPGroupRelationResponseBodyData extends $dara.Model {
  globalSecurityIPGroupRel?: ModifySecurityIPGroupRelationResponseBodyDataGlobalSecurityIPGroupRel[];
  /**
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      globalSecurityIPGroupRel: 'GlobalSecurityIPGroupRel',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalSecurityIPGroupRel: { 'type': 'array', 'itemType': ModifySecurityIPGroupRelationResponseBodyDataGlobalSecurityIPGroupRel },
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.globalSecurityIPGroupRel)) {
      $dara.Model.validateArray(this.globalSecurityIPGroupRel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityIPGroupRelationResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * ListResult<InstanceSSL>
   */
  data?: ModifySecurityIPGroupRelationResponseBodyData;
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * 840F51F7-9C01-538D-94F6-AE712905****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ModifySecurityIPGroupRelationResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

