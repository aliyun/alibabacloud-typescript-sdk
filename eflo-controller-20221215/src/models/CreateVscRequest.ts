// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVscRequestTag extends $dara.Model {
  /**
   * @remarks
   * The resource tag key.
   * 
   * @example
   * key001
   */
  key?: string;
  /**
   * @remarks
   * The resource tag value.
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
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * e01-cn-zvp2tgykr08
   */
  nodeId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2xdkc6icwfha
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource tags.
   */
  tag?: CreateVscRequestTag[];
  /**
   * @remarks
   * The custom name of the VSC, which is unique on a compute node.
   * 
   * @example
   * test_name
   */
  vscName?: string;
  /**
   * @remarks
   * The VSC type. Valid values: primary and standard. Default value: primary.
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

