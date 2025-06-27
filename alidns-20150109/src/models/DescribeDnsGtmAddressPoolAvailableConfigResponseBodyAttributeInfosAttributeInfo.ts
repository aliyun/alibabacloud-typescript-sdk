// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfosAttributeInfo extends $dara.Model {
  /**
   * @remarks
   * The parent line code of the source region.
   * 
   * @example
   * telecom
   */
  fatherCode?: string;
  /**
   * @remarks
   * The code of the source region group.
   * 
   * @example
   * default
   */
  groupCode?: string;
  /**
   * @remarks
   * The name of the request source group.
   * 
   * @example
   * global
   */
  groupName?: string;
  /**
   * @remarks
   * The line code of the source region.
   * 
   * @example
   * default
   */
  lineCode?: string;
  /**
   * @remarks
   * The line name of the source region.
   * 
   * @example
   * global
   */
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      fatherCode: 'FatherCode',
      groupCode: 'GroupCode',
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatherCode: 'string',
      groupCode: 'string',
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

