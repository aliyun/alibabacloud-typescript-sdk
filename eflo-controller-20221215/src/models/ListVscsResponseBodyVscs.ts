// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVscsResponseBodyVscsTags } from "./ListVscsResponseBodyVscsTags";


export class ListVscsResponseBodyVscs extends $dara.Model {
  /**
   * @remarks
   * Lingjun node ID
   * 
   * @example
   * e01-cn-fzh47xd7u08
   */
  nodeId?: string;
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-acfm2zkwhkns57i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Status of Vsc
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * Tags
   */
  tags?: ListVscsResponseBodyVscsTags[];
  /**
   * @remarks
   * Vsc ID
   * 
   * @example
   * vsc-001
   */
  vscId?: string;
  /**
   * @remarks
   * Customized name of Vsc
   * 
   * @example
   * test_name
   */
  vscName?: string;
  /**
   * @remarks
   * Vsc type, primary/standard
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

