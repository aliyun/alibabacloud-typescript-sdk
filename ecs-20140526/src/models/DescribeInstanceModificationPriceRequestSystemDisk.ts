// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceModificationPriceRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The category of the system disk. You must specify this parameter only when you upgrade a non-I/O optimized instance of a retired instance type to an I/O optimized instance of an available instance type. For more information about instance types, see [Instance families](https://help.aliyun.com/document_detail/25378.html) and [Retired instance types](https://help.aliyun.com/document_detail/55263.html).
   * 
   * Valid values:
   * 
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * 
   * This parameter is empty by default.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

