// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachExpressConnectRouterChildInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the VBR instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-j6cwxhgg0s5nuephp****
   */
  childInstanceId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the account to which the VBR instance belongs.
   * 
   * > If you want to load a network instance that belongs to a different Alibaba Cloud account, this parameter is required.
   * 
   * @example
   * 1905501448682345
   */
  childInstanceOwnerId?: number;
  /**
   * @remarks
   * The region ID of the VBR instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  childInstanceRegionId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid value: **VBR** (Virtual Border Router).
   * 
   * This parameter is required.
   * 
   * @example
   * VBR
   */
  childInstanceType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the child instance. The description must be 0 to 128 characters in length.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether it is only a dry run for this request. Valid values:
   * - **true**: performs a dry run for the request without modifying EPS resources.
   * - **false** (default): sends a normal request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the Express Connect Router (ECR).
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-a5xqrgbeidz1w8****
   */
  ecrId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      childInstanceId: 'ChildInstanceId',
      childInstanceOwnerId: 'ChildInstanceOwnerId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childInstanceId: 'string',
      childInstanceOwnerId: 'number',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
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

