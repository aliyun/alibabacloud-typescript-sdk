// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAuthInfoResponseBodyApiKeys extends $dara.Model {
  /**
   * @remarks
   * Supabase ANON_KEY
   * 
   * @example
   * eyxxxJ9.ey****
   */
  anonKey?: string;
  /**
   * @remarks
   * Supabase SERVICE_ROLE_KEY
   * 
   * @example
   * eyxxxJ9.ey****KfQ.DaYxxxt4Q
   */
  serviceKey?: string;
  static names(): { [key: string]: string } {
    return {
      anonKey: 'AnonKey',
      serviceKey: 'ServiceKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anonKey: 'string',
      serviceKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAuthInfoResponseBodyConfigList extends $dara.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceAuthInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * API Keys
   */
  apiKeys?: DescribeInstanceAuthInfoResponseBodyApiKeys;
  configList?: DescribeInstanceAuthInfoResponseBodyConfigList[];
  instanceName?: string;
  /**
   * @example
   * i5o1XAp4sR*****oyOb3O
   */
  jwtSecret?: string;
  /**
   * @example
   * 87249A6F-xxx-804C-E1E0AD1FAD90
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeys: 'ApiKeys',
      configList: 'ConfigList',
      instanceName: 'InstanceName',
      jwtSecret: 'JwtSecret',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeys: DescribeInstanceAuthInfoResponseBodyApiKeys,
      configList: { 'type': 'array', 'itemType': DescribeInstanceAuthInfoResponseBodyConfigList },
      instanceName: 'string',
      jwtSecret: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.apiKeys && typeof (this.apiKeys as any).validate === 'function') {
      (this.apiKeys as any).validate();
    }
    if(Array.isArray(this.configList)) {
      $dara.Model.validateArray(this.configList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

