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

export class DescribeInstanceAuthInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * API Keys
   */
  apiKeys?: DescribeInstanceAuthInfoResponseBodyApiKeys;
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
      jwtSecret: 'JwtSecret',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeys: DescribeInstanceAuthInfoResponseBodyApiKeys,
      jwtSecret: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.apiKeys && typeof (this.apiKeys as any).validate === 'function') {
      (this.apiKeys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

