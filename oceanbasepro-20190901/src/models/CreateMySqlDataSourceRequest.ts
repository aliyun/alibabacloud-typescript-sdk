// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMySqlDataSourceRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * dg-x****
   */
  dgInstanceId?: string;
  /**
   * @example
   * rm-t4****
   */
  instanceId?: string;
  /**
   * @example
   * xxx.xxx.xxx.1
   */
  ip?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * source_name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pass_word
   */
  password?: string;
  /**
   * @example
   * 2883
   */
  port?: number;
  /**
   * @example
   * test
   */
  schema?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * VPC
   */
  type?: string;
  useSsl?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_name
   */
  userName?: string;
  /**
   * @example
   * vpc-bp1d2q3mhg9i23ofi****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      dgInstanceId: 'DgInstanceId',
      instanceId: 'InstanceId',
      ip: 'Ip',
      name: 'Name',
      password: 'Password',
      port: 'Port',
      schema: 'Schema',
      type: 'Type',
      useSsl: 'UseSsl',
      userName: 'UserName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      dgInstanceId: 'string',
      instanceId: 'string',
      ip: 'string',
      name: 'string',
      password: 'string',
      port: 'number',
      schema: 'string',
      type: 'string',
      useSsl: 'boolean',
      userName: 'string',
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

