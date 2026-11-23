// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpressConnectRouterChildInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID used to associate the Express Connect Router (ECR) with the VBR.
   * 
   * @example
   * ecr-assoc-9p2qxx5phpca2m****
   */
  associationId?: string;
  /**
   * @remarks
   * The instance ID of the network instance to be queried.
   * 
   * @example
   * vbr-j6cwxhgg0s5nuephp****
   */
  childInstanceId?: string;
  /**
   * @remarks
   * The region where the network instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  childInstanceRegionId?: string;
  /**
   * @remarks
   * The type of the network instance. Valid values: **VBR**: virtual border router.
   * 
   * @example
   * VBR
   */
  childInstanceType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the value from your client and ensure that the value is unique across different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether this request is only a dry run. Valid values:
   * 
   * - **true**: sends a check request without modifying the EPS resource.
   * - **false** (default): sends a normal request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Instance ID of the Express Connect Router (ECR) instance.
   * > You can call the DescribeExpressConnectRouter API operation to obtain instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-mezk2idmsd0vx2****
   */
  ecrId?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 1 to 2147483647. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * - If this is the first query or no next query is required, leave this parameter empty.
   * - If a next query is required, set the value to the NextToken value returned from the previous API call.
   * 
   * @example
   * AAAAAYws9fJ0Ur4MGm/5OkDoW/Zn0J0/sCjivzwX9oBcwFnWaaas/kSG+J/WzLOxJHS4****
   */
  nextToken?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      associationId: 'AssociationId',
      childInstanceId: 'ChildInstanceId',
      childInstanceRegionId: 'ChildInstanceRegionId',
      childInstanceType: 'ChildInstanceType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associationId: 'string',
      childInstanceId: 'string',
      childInstanceRegionId: 'string',
      childInstanceType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

