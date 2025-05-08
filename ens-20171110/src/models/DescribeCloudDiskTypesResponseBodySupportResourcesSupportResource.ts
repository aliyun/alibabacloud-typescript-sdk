// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDiskTypesResponseBodySupportResourcesSupportResource extends $dara.Model {
  /**
   * @remarks
   * The category of the disk.
   * 
   * *   cloud_efficiency: ultra disk.
   * *   cloud_ssd: all-flash disk.
   * *   local_hdd: local HDD.
   * *   local_ssd: local SSD.
   * 
   * @example
   * cloud_efficiency
   */
  category?: string;
  /**
   * @remarks
   * The ID of the edge node.
   * 
   * @example
   * cn-guangzhou-10
   */
  ensRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      ensRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

