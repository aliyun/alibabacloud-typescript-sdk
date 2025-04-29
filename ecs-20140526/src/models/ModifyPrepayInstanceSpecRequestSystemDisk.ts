// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPrepayInstanceSpecRequestSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The new category of the system disk. Valid values:
   * 
   * *   cloud_efficiency: utra disk
   * *   cloud_ssd: standard SSD
   * 
   * >  This parameter takes effect on an instance only when you change from a [retired instance type](https://help.aliyun.com/document_detail/55263.html) to an instance type in an [instance family available for purchase](https://help.aliyun.com/document_detail/25378.html) and upgrade the instance from a non-I/O optimized instance type to an I/O optimized instance type.
   * 
   * @example
   * cloud_efficiency
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

