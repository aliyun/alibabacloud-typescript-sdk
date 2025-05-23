// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNodePoolVulsResponseBodyVulRecords } from "./DescribeNodePoolVulsResponseBodyVulRecords";


export class DescribeNodePoolVulsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The vulnerability list of all node pools.
   */
  vulRecords?: DescribeNodePoolVulsResponseBodyVulRecords[];
  /**
   * @remarks
   * Indicates whether the CVE vulnerability patching service provided by Security Center is purchased.
   * 
   * *   true: yes
   * *   false: no
   * 
   * @example
   * false
   */
  vulsFixServicePurchased?: boolean;
  static names(): { [key: string]: string } {
    return {
      vulRecords: 'vul_records',
      vulsFixServicePurchased: 'vuls_fix_service_purchased',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vulRecords: { 'type': 'array', 'itemType': DescribeNodePoolVulsResponseBodyVulRecords },
      vulsFixServicePurchased: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.vulRecords)) {
      $dara.Model.validateArray(this.vulRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

