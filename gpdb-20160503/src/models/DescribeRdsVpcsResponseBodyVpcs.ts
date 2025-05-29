// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRdsVpcsResponseBodyVpcsVpc } from "./DescribeRdsVpcsResponseBodyVpcsVpc";


export class DescribeRdsVpcsResponseBodyVpcs extends $dara.Model {
  /**
   * @remarks
   * The queried VPC.
   */
  vpc?: DescribeRdsVpcsResponseBodyVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeRdsVpcsResponseBodyVpcsVpc },
    };
  }

  validate() {
    if(Array.isArray(this.vpc)) {
      $dara.Model.validateArray(this.vpc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

