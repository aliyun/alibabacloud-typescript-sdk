// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVscRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key001
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value001
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

export class CreateVscRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotency of the request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * This parameter is required.
   * 
   * @example
   * e01-cn-zvp2tgykr08
   */
  nodeId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2xdkc6icwfha
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: CreateVscRequestTag[];
  /**
   * @remarks
   * The custom name of the VSC. The name must be unique on a single compute node.
   * 
   * @example
   * test_name
   */
  vscName?: string;
  /**
   * @remarks
   * The type of the VSC. Valid values: primary and standard. The default value is primary.
   * 
   * @example
   * primary
   */
  vscType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      nodeId: 'NodeId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vscName: 'VscName',
      vscType: 'VscType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      nodeId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateVscRequestTag },
      vscName: 'string',
      vscType: 'string',
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

