// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackSourceCidrRequest extends $dara.Model {
  ipVersion?: string;
  line?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ipVersion: 'IpVersion',
      line: 'Line',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipVersion: 'string',
      line: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

