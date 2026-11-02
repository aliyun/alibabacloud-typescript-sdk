// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSaslUserRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
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
   * > This parameter is supported only for serverless instances.
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
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type. Valid values:
   * 
   * - plain: A simple username and password authentication mechanism. MSMQ for Apache Kafka optimizes the PLAIN mechanism and supports the dynamic increase of SASL users without restarting the instance.
   * 
   * - scram: A username and password authentication mechanism that provides higher security than PLAIN. MSMQ for Apache Kafka uses SCRAM-SHA-256.
   * 
   * - LDAP: Applicable only to new users of Confluent instances.
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

