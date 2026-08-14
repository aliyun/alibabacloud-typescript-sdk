// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeL7RsPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  realServers?: string[];
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      realServers: 'RealServers',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      realServers: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.realServers)) {
      $dara.Model.validateArray(this.realServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

