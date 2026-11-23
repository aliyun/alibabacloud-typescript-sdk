// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeInstanceFromExpressConnectRouterRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without sending the request. Valid values:
   * 
   * - **true**: performs a dry run without modifying service resources.
   * 
   * - **false** (default): sends a normal request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The Express Connect Router (ECR) instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-mezk2idmsd0vx2****
   */
  ecrId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the ECR instance for which authorization is being revoked.
   * 
   * This parameter is required.
   * 
   * @example
   * 121012345612****
   */
  ecrOwnerAliUid?: number;
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-j6cwxhgg0s5nuephp****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region of the network instance for which authorization is being revoked.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  instanceRegionId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * - **VBR**: virtual border router instance.
   * - **VPC**: virtual private cloud instance.
   * 
   * This parameter is required.
   * 
   * @example
   * VBR
   */
  instanceType?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      ecrOwnerAliUid: 'EcrOwnerAliUid',
      instanceId: 'InstanceId',
      instanceRegionId: 'InstanceRegionId',
      instanceType: 'InstanceType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      ecrOwnerAliUid: 'number',
      instanceId: 'string',
      instanceRegionId: 'string',
      instanceType: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

