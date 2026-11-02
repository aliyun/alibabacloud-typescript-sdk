// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSaslUserRequest extends $dara.Model {
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
   * The encryption mechanism. Valid values:
   * 
   * - SCRAM-SHA-512 (selected by default)
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
   * - **plain**: a simple username and password verification mechanism. ApsaraMQ for Kafka has an optimization for the PLAIN mechanism to allow you to dynamically increase SASL users without restarting the instance.
   * 
   * - **scram**: a username and password verification mechanism that provides higher security than PLAIN. ApsaraMQ for Kafka uses SCRAM-SHA-256.
   * - **LDAP**: applicable only to the delete operation for Confluent instance users.
   * 
   * 
   * Default value: **plain**.
   * 
   * @example
   * scram
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
      regionId: 'RegionId',
      type: 'Type',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mechanism: 'string',
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

