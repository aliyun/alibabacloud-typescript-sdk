// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectRouterAllowedPrefixHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the association between the ECR and the virtual private cloud (VPC) or transit router (TR).
   * 
   * >  You must specify either **InstanceId** or **AssociationId**.
   * 
   * @example
   * ecr-assoc-9p2qxx5phpca2m****
   */
  associationId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * FF9nMec/RZ6H9oqFn1pvyir/SLRlxCCyHJonbGzqL01hiM6Jb3wJowdHvjCfog7ww1b9rSHMRFJnrUBfVba68TJg==
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run.
   * *   **false** (default): performs a dry run and performs the actual request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ECR ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-mezk2idmsd0vx2****
   */
  ecrId?: string;
  /**
   * @remarks
   * The ID of the network instance that is associated with the ECR.
   * 
   * >  You must specify either **InstanceId** or **AssociationId**.
   * 
   * @example
   * vbr-j6cwxhgg0s5nuephp****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values:
   * 
   * *   **VPC**
   * *   **TR**
   * 
   * @example
   * VPC
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      associationId: 'AssociationId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

