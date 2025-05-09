// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallAclGroupListResponseBodyAclGroupListAclConfig extends $dara.Model {
  strictMode?: number;
  static names(): { [key: string]: string } {
    return {
      strictMode: 'StrictMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strictMode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

