// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMobileAgentPackageRequest extends $dara.Model {
  /**
   * @remarks
   * An array of node instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * An array of package IDs.
   */
  packageIds?: string[];
  /**
   * @remarks
   * The package specification.
   * 
   * @example
   * advanced
   */
  packageSpec?: string;
  /**
   * @remarks
   * The package status.
   * 
   * @example
   * ACTIVE
   */
  packageStatus?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
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

