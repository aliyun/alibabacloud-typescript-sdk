// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectRouterAllowedPrefixHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the VPC or transit router (TR) associated with the Express Connect Router (ECR) for forward routing.
   * 
   * > You must specify either the **InstanceId** parameter or the **AssociationId** parameter.
   * 
   * @example
   * ecr-assoc-9p2qxx5phpca2m****
   */
  associationId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the value from your client to ensure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * FF9nMec/RZ6H9oqFn1pvyir/SLRlxCCyHJonbGzqL01hiM6Jb3wJowdHvjCfog7ww1b9rSHMRFJnrUBfVba68TJg==
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether it is only a dry run for this request. Valid values:
   * 
   * - **true**: Performs a dry run for the request without modifying EPS resources.
   * 
   * - **false** (default): Sends a normal request.
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
   * ecr-mezk2idmsd0vx2****
   */
  ecrId?: string;
  /**
   * @remarks
   * The instance ID to load into the Express Connect Router (ECR).
   * 
   * > You must specify either the **InstanceId** parameter or the **AssociationId** parameter.
   * 
   * @example
   * vbr-j6cwxhgg0s5nuephp****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * - **VPC**: VPC instance.
   * - **TR**: Transit router instance.
   * 
   * @example
   * VPC
   */
  instanceType?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      associationId: 'AssociationId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      instanceId: 'string',
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

