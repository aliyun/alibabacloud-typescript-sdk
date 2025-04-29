// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveVpcAccessAndAbolishApisRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-uf6iaale3gfef9t9cb41
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  needBatchWork?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8080
   */
  port?: number;
  securityToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-bp1iw82phcgkvupgfv0o8
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      needBatchWork: 'NeedBatchWork',
      port: 'Port',
      securityToken: 'SecurityToken',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      needBatchWork: 'boolean',
      port: 'number',
      securityToken: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

