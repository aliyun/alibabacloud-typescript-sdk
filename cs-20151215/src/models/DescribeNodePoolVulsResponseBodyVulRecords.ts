// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNodePoolVulsResponseBodyVulRecordsVulList } from "./DescribeNodePoolVulsResponseBodyVulRecordsVulList";


export class DescribeNodePoolVulsResponseBodyVulRecords extends $dara.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * i-t4n2qolb0wtzt0pz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node name. This name is the identifier of the node in the cluster.
   * 
   * @example
   * cn-hangzhou.192.168.x.x
   */
  nodeName?: string;
  /**
   * @remarks
   * The list of vulnerabilities.
   */
  vulList?: DescribeNodePoolVulsResponseBodyVulRecordsVulList[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instance_id',
      nodeName: 'node_name',
      vulList: 'vul_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeName: 'string',
      vulList: { 'type': 'array', 'itemType': DescribeNodePoolVulsResponseBodyVulRecordsVulList },
    };
  }

  validate() {
    if(Array.isArray(this.vulList)) {
      $dara.Model.validateArray(this.vulList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

