// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to unbind all tags. This parameter is valid only when **TagKey** is empty. Valid values:
   * 
   * - **true**: Unbinds all tags from the Express Connect Router (ECR) instance.
   * - **false** (default): Does not unbind all tags from the Express Connect Router (ECR) instance.
   * 
   * > You must specify either **TagKey** or **All**.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * - **true**: Performs a dry run without modifying EPS resources.
   * 
   * - **false** (default): Sends the request normally.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The list of resource instance IDs. You can unbind tags from up to 50 resource instances at a time.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * - **EXPRESSCONNECTROUTER**: Express Connect Router (ECR) instance.
   * - **EXPRESSCONNECTROUTERVPCASSOCIATION**: the associate relationship between an ECR and a VPC.
   * - **EXPRESSCONNECTROUTERTRASSOCIATION**: the associate relationship between an ECR and a transit router.
   * - **ECRFLOWLOG**: ECR flow log.
   * 
   * This parameter is required.
   * 
   * @example
   * EXPRESSCONNECTROUTER
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys of the Express Connect Router (ECR) instance to unbind.
   */
  tagKey?: string[];
  version?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

