// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityIPGroupRelationResponseBodyDataGlobalSecurityIPGroupRel extends $dara.Model {
  /**
   * @remarks
   * The IP addresses in the whitelist template.
   * 
   * > Separate multiple IP addresses with commas (,). A maximum of 1,000 IP addresses or CIDR blocks can be added to all IP address whitelists.
   * 
   * @example
   * 192.168.0.1,192.168.100.0/24
   */
  GIpList?: string;
  /**
   * @remarks
   * The name of the IP address whitelist template. The name must meet the following requirements:
   * 
   * - It must consist of lowercase letters, digits, and underscores (_).
   * 
   * - It must start with a letter and end with a letter or a digit.
   * 
   * - It must be 2 to 120 characters in length.
   * 
   * @example
   * saas_jump
   */
  globalIgName?: string;
  /**
   * @remarks
   * The ID of the IP address whitelist template.
   * 
   * @example
   * g-v8kwereyd6u7kx****
   */
  globalSecurityGroupId?: string;
  /**
   * @remarks
   * The region ID.
   * 
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
  /**
   * @remarks
   * The information about the cross-product IP address whitelist template that is attached to the instance.
   */
  globalSecurityIPGroupRel?: ModifySecurityIPGroupRelationResponseBodyDataGlobalSecurityIPGroupRel[];
  /**
   * @remarks
   * The instance ID.
   * 
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
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ModifySecurityIPGroupRelationResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * > If the request is successful, Successful is returned. If the request fails, an error message, such as an error code, is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 840F51F7-9C01-538D-94F6-AE712905****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
   * 
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

