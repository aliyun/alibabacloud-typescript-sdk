// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVscResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the compute node in which the VSC resides.
   * 
   * @example
   * e01-cn-kvw44e6dn04
   */
  nodeId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2k3rqlvv6ytq
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
   * The VSC type.
   * 
   * @example
   * primary
   */
  vscType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      vscId: 'VscId',
      vscName: 'VscName',
      vscType: 'VscType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      vscId: 'string',
      vscName: 'string',
      vscType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

