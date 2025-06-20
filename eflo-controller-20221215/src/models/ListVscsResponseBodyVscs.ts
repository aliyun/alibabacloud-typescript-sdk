// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVscsResponseBodyVscsTags } from "./ListVscsResponseBodyVscsTags";


export class ListVscsResponseBodyVscs extends $dara.Model {
  /**
   * @remarks
   * The ID of the Lingjun node.
   * 
   * @example
   * e01-cn-fzh47xd7u08
   */
  nodeId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm2zkwhkns57i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The VSC status.
   * 
   * Valid values:
   * 
   * *   Creating
   * *   Normal
   * *   Deleting
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListVscsResponseBodyVscsTags[];
  /**
   * @remarks
   * The VSC ID.
   * 
   * @example
   * vsc-001
   */
  vscId?: string;
  /**
   * @remarks
   * The custom name of the VSC.
   * 
   * @example
   * test_name
   */
  vscName?: string;
  /**
   * @remarks
   * The VSC type. Valid values: primary and standard.
   * 
   * @example
   * primary
   */
  vscType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      vscId: 'VscId',
      vscName: 'VscName',
      vscType: 'VscType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListVscsResponseBodyVscsTags },
      vscId: 'string',
      vscName: 'string',
      vscType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

