// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateDirectConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the direct connection endpoint. The prefix must be 8 to 40 characters in length and can contain lowercase letters and digits. It must start with a lowercase letter. Default value: the instance ID followed by `-direct`. For example, if the instance ID is r-8vbwsicr5d5gse****, the default value is `r-8vbwsicr5d5gse****-direct`.
   * 
   * @example
   * redisdirect123
   */
  connectionString?: string;
  /**
   * @remarks
   * The instance ID. Only cluster instances deployed in classic mode are supported. For instances deployed in classic mode, the value of the ComputingType parameter is Machine. You can call the DescribeInstances operation to query the ComputingType parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The port number. Valid values: **1024** to **65535**. Default value: **6379**.
   * 
   * @example
   * 6379
   */
  port?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      port: 'Port',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      port: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

