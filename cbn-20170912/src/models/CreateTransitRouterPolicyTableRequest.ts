// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterPolicyTableRequestTag extends $dara.Model {
  /**
   * @example
   * tagtest
   */
  key?: string;
  /**
   * @example
   * tagtest
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterPolicyTableRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the parameter value on your client to ensure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the policy route table.
   * 
   * @example
   * descriptiontest
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the creation request, including permission and instance status checks. Valid values:
   * 
   * - **false** (default): sends a normal request. The system performs a check and creates the policy route table if the check passes.
   * - **true**: sends a dry run request. The system only performs a check and does not create the policy route table. Check items include whether required parameters are specified and whether the request format is valid. If the check fails, the corresponding error is returned. If the check passes, the corresponding request ID is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The name of the policy route table.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * The list of tags bound to the policy route table.
   */
  tag?: CreateTransitRouterPolicyTableRequestTag[];
  /**
   * @remarks
   * The ID of the Enterprise Edition transit router.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-uf654ttymmljlvh2x****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      name: 'Name',
      tag: 'Tag',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      name: 'string',
      tag: { 'type': 'array', 'itemType': CreateTransitRouterPolicyTableRequestTag },
      transitRouterId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

