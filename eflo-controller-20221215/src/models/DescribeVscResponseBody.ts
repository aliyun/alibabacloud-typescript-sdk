// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVscResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of the compute node where the Vsc is located
   * 
   * @example
   * e01-cn-kvw44e6dn04
   */
  nodeId?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  /**
   * @remarks
   * Resource Group ID
   * 
   * @example
   * rg-aek2k3rqlvv6ytq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Status of the Vsc
   * 
   * @example
   * Normal
   */
  status?: string;
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
   * Custom name of the Vsc
   * 
   * @example
   * test_name
   */
  vscName?: string;
  /**
   * @remarks
   * Vsc type
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

