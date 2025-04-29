// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceSpecRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The new category of the system disk. Valid values:
   * 
   * *   cloud_efficiency: ultra disk
   * *   cloud_ssd: standard SSD
   * 
   * >  This parameter takes effect only when you upgrade a non-I/O optimized instance of [a retired instance type](https://help.aliyun.com/document_detail/55263.html) to an I/O optimized instance of [an instance type available for purchase](https://help.aliyun.com/document_detail/25378.html).
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

