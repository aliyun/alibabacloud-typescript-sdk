// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSaslUserRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_pre-cn-v0h1cng0****
   */
  instanceId?: string;
  /**
   * @remarks
   * Encryption method. Valid values:
   * 
   * - SCRAM-SHA-512 (selected by default)
   * 
   * - SCRAM-SHA-256
   * 
   * > This parameter is only supported for Serverless instances.
   * 
   * @example
   * SCRAM-SHA-256
   */
  mechanism?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Type. Valid values:
   * 
   * - **plain**: A simple username and password verification mechanism. MSMQ optimizes the PLAIN mechanism to support adding SASL users dynamically without restarting the instance.
   * 
   * - **scram**: A username and password verification mechanism with higher security than PLAIN. MSMQ uses SCRAM-SHA-256.
   * 
   * - **LDAP**: Only applicable for deleting Confluent instance users.
   * 
   * Default value: **plain**.
   * 
   * @example
   * scram
   */
  type?: string;
  /**
   * @remarks
   * Username.
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

