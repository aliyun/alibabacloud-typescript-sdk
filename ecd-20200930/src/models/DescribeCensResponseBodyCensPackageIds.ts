// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCensResponseBodyCensPackageIds extends $dara.Model {
  /**
   * @remarks
   * The ID of the bandwidth plan that is bound to the CEN instance.
   * 
   * @example
   * cenbwp-4c2zaavbvh5f42****
   */
  packageId?: string;
  static names(): { [key: string]: string } {
    return {
      packageId: 'PackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

