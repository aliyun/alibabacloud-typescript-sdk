// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMobileAgentPackageRequest extends $dara.Model {
  instanceIds?: string[];
  packageIds?: string[];
  /**
   * @example
   * advanced
   */
  packageSpec?: string;
  /**
   * @example
   * ACTIVE
   */
  packageStatus?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      packageIds: 'PackageIds',
      packageSpec: 'PackageSpec',
      packageStatus: 'PackageStatus',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      packageIds: { 'type': 'array', 'itemType': 'string' },
      packageSpec: 'string',
      packageStatus: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.packageIds)) {
      $dara.Model.validateArray(this.packageIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

