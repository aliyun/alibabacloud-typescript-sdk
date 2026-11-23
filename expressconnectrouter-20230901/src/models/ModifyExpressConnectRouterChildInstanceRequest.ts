// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyExpressConnectRouterChildInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the VBR.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-t4n6xu2d5q0iaad1yl4le
   */
  childInstanceId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * - **VBR**: VBR instance.
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
   * You can generate a parameter value from your client to ensure that the parameter value is unique among different requests. The client token only supports ASCII characters.
   * 
   * > 
   * > - If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request is different.
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
   * Specifies whether the request is a dry run only. Valid values:
   * 
   * - **true**: performs a dry run and does not modify service resources.
   * - **false** (default): sends a normal request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the Express Connect Router (ECR).
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-gny3gqp41n7vrrn5iz
   */
  ecrId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      childInstanceId: 'ChildInstanceId',
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

