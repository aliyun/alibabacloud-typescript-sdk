// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClusterVulsResponseBodyVulRecords } from "./DescribeClusterVulsResponseBodyVulRecords";


export class DescribeClusterVulsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of vulnerabilities.
   */
  vulRecords?: DescribeClusterVulsResponseBodyVulRecords[];
  static names(): { [key: string]: string } {
    return {
      vulRecords: 'vul_records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vulRecords: { 'type': 'array', 'itemType': DescribeClusterVulsResponseBodyVulRecords },
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

