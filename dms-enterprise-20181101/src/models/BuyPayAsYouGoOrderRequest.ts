// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuyPayAsYouGoOrderRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the resource that you want to purchase.
   * 
   * *   **VersionType**: DMS that supports control modes
   * *   **SensitiveDataProtection**: DMS that supports sensitive data protection
   * 
   * This parameter is required.
   * 
   * @example
   * SensitiveDataProtection
   */
  commodityType?: string;
  /**
   * @remarks
   * The number of database instances that you want to use DMS to manage.
   * 
   * > A quota can be used for only one database instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  insNum?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The control mode of DMS. Valid values:
   * 
   * *   **stand**: Stable Change
   * *   **safety**: Security Collaboration
   * 
   * @example
   * stand
   */
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      commodityType: 'CommodityType',
      insNum: 'InsNum',
      tid: 'Tid',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityType: 'string',
      insNum: 'number',
      tid: 'number',
      versionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

