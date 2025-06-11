// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableSpecResponseBodyDataAvailableSpecificationsDiskSizeRange } from "./DescribeAvailableSpecResponseBodyDataAvailableSpecificationsDiskSizeRange";
import { DescribeAvailableSpecResponseBodyDataAvailableSpecificationsLogDiskSizeRange } from "./DescribeAvailableSpecResponseBodyDataAvailableSpecificationsLogDiskSizeRange";


export class DescribeAvailableSpecResponseBodyDataAvailableSpecifications extends $dara.Model {
  diskSizeRange?: DescribeAvailableSpecResponseBodyDataAvailableSpecificationsDiskSizeRange;
  diskTypes?: string[];
  /**
   * @example
   * 4C16GB
   */
  instanceClass?: string;
  logDiskSizeRange?: DescribeAvailableSpecResponseBodyDataAvailableSpecificationsLogDiskSizeRange;
  nodeNum?: number[];
  /**
   * @example
   * oceanbase.cluster.cd8.xlarge
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      diskSizeRange: 'DiskSizeRange',
      diskTypes: 'DiskTypes',
      instanceClass: 'InstanceClass',
      logDiskSizeRange: 'LogDiskSizeRange',
      nodeNum: 'NodeNum',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSizeRange: DescribeAvailableSpecResponseBodyDataAvailableSpecificationsDiskSizeRange,
      diskTypes: { 'type': 'array', 'itemType': 'string' },
      instanceClass: 'string',
      logDiskSizeRange: DescribeAvailableSpecResponseBodyDataAvailableSpecificationsLogDiskSizeRange,
      nodeNum: { 'type': 'array', 'itemType': 'number' },
      spec: 'string',
    };
  }

  validate() {
    if(this.diskSizeRange && typeof (this.diskSizeRange as any).validate === 'function') {
      (this.diskSizeRange as any).validate();
    }
    if(Array.isArray(this.diskTypes)) {
      $dara.Model.validateArray(this.diskTypes);
    }
    if(this.logDiskSizeRange && typeof (this.logDiskSizeRange as any).validate === 'function') {
      (this.logDiskSizeRange as any).validate();
    }
    if(Array.isArray(this.nodeNum)) {
      $dara.Model.validateArray(this.nodeNum);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

