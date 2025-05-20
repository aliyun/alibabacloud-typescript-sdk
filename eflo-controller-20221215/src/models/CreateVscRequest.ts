// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateVscRequestTag } from "./CreateVscRequestTag";


export class CreateVscRequest extends $dara.Model {
  /**
   * @remarks
   * Idempotent parameter
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Node ID
   * 
   * This parameter is required.
   * 
   * @example
   * e01-cn-zvp2tgykr08
   */
  nodeId?: string;
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-aek2xdkc6icwfha
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Resource tags
   */
  tag?: CreateVscRequestTag[];
  /**
   * @remarks
   * User-defined name for vscId, unique on a single compute node
   * 
   * @example
   * test_name
   */
  vscName?: string;
  /**
   * @remarks
   * Set VSC type, primary/standard, default value is primary
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

