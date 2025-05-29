// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBResourceManagementModeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The resource management mode. Valid values:
   * 
   * *   resourceGroup: resource group management.
   * *   resourceQueue: resource queue management.
   * 
   * @example
   * resourceGroup
   */
  resourceManagementMode?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceManagementMode: 'ResourceManagementMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceManagementMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

