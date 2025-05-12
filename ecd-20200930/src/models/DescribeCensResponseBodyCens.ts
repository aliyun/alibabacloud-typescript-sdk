// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCensResponseBodyCensPackageIds } from "./DescribeCensResponseBodyCensPackageIds";
import { DescribeCensResponseBodyCensTags } from "./DescribeCensResponseBodyCensTags";


export class DescribeCensResponseBodyCens extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-3gwy16dojz1m65****
   */
  cenId?: string;
  /**
   * @remarks
   * The time when the CEN instance was created.
   * 
   * @example
   * 2021-06-16T08:46Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the CEN instance.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The IPv6 level.
   * 
   * >  IPv6 is not supported.
   * 
   * Valid value:
   * 
   * *   DISABLED
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * DISABLED
   */
  ipv6Level?: string;
  /**
   * @remarks
   * The name of the CEN instance.
   * 
   * @example
   * testCen
   */
  name?: string;
  /**
   * @remarks
   * The bandwidth plans that are bound to the CEN instance.
   */
  packageIds?: DescribeCensResponseBodyCensPackageIds[];
  /**
   * @remarks
   * The tolerated level of CIDR block conflict.
   * 
   * Valid value:
   * 
   * *   REDUCED: CIDR block conflicts are allowed, but the conflicting CIDR blocks cannot be identical.
   * 
   * @example
   * REDUCED
   */
  protectionLevel?: string;
  /**
   * @remarks
   * The status of the CEN instance.
   * 
   * Valid values:
   * 
   * *   Creating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Active
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Deleting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The tags of the CEN instance.
   */
  tags?: DescribeCensResponseBodyCensTags[];
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      creationTime: 'CreationTime',
      description: 'Description',
      ipv6Level: 'Ipv6Level',
      name: 'Name',
      packageIds: 'PackageIds',
      protectionLevel: 'ProtectionLevel',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      creationTime: 'string',
      description: 'string',
      ipv6Level: 'string',
      name: 'string',
      packageIds: { 'type': 'array', 'itemType': DescribeCensResponseBodyCensPackageIds },
      protectionLevel: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeCensResponseBodyCensTags },
    };
  }

  validate() {
    if(Array.isArray(this.packageIds)) {
      $dara.Model.validateArray(this.packageIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

