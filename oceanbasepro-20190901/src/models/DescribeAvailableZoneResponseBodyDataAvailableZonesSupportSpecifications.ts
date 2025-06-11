// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecificationsDiskSizeRange } from "./DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecificationsDiskSizeRange";
import { DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecificationsSupportEngineVersions } from "./DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecificationsSupportEngineVersions";


export class DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecifications extends $dara.Model {
  diskSizeRange?: DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecificationsDiskSizeRange;
  diskTypes?: string[];
  /**
   * @example
   * 4C16GB
   */
  instanceClass?: string;
  /**
   * @example
   * oceanbase.cluster.cd8.xlarge
   */
  spec?: string;
  supportEngineVersions?: DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecificationsSupportEngineVersions[];
  static names(): { [key: string]: string } {
    return {
      diskSizeRange: 'DiskSizeRange',
      diskTypes: 'DiskTypes',
      instanceClass: 'InstanceClass',
      spec: 'Spec',
      supportEngineVersions: 'SupportEngineVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSizeRange: DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecificationsDiskSizeRange,
      diskTypes: { 'type': 'array', 'itemType': 'string' },
      instanceClass: 'string',
      spec: 'string',
      supportEngineVersions: { 'type': 'array', 'itemType': DescribeAvailableZoneResponseBodyDataAvailableZonesSupportSpecificationsSupportEngineVersions },
    };
  }

  validate() {
    if(this.diskSizeRange && typeof (this.diskSizeRange as any).validate === 'function') {
      (this.diskSizeRange as any).validate();
    }
    if(Array.isArray(this.diskTypes)) {
      $dara.Model.validateArray(this.diskTypes);
    }
    if(Array.isArray(this.supportEngineVersions)) {
      $dara.Model.validateArray(this.supportEngineVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

