// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSaslUserRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-v0h1cng0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The encryption method. Valid values:
   * 
   * - SCRAM-SHA-512 (default)
   * 
   * - SCRAM-SHA-256
   * 
   * > This parameter is supported only for Serverless instances.
   * 
   * @example
   * SCRAM-SHA-256
   */
  mechanism?: string;
  /**
   * @remarks
   * The password.
   * 
   * This parameter is required.
   * 
   * @example
   * 12***
   */
  password?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The SASL mechanism. Valid values:
   * 
   * - plain: a simple username and password authentication mechanism. Message Queue for Apache Kafka optimizes the PLAIN mechanism to support the dynamic creation of SASL users without the need to restart the instance.
   * 
   * - scram: a username and password authentication mechanism that provides higher security than the PLAIN mechanism. Message Queue for Apache Kafka uses Salted Challenge Response Authentication Mechanism (SCRAM)-SHA-256.
   * 
   * - LDAP: This value is applicable only when you create users for Confluent instances.
   * 
   * Default value: plain.
   * 
   * @example
   * plain
   */
  type?: string;
  /**
   * @remarks
   * The username.
   * 
   * This parameter is required.
   * 
   * @example
   * test***
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mechanism: 'Mechanism',
      password: 'Password',
      regionId: 'RegionId',
      type: 'Type',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mechanism: 'string',
      password: 'string',
      regionId: 'string',
      type: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

