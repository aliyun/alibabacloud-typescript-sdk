// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMobileAgentPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The list of packages.
   */
  packageIds?: string[];
  static names(): { [key: string]: string } {
    return {
      packageIds: 'PackageIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.packageIds)) {
      $dara.Model.validateArray(this.packageIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

