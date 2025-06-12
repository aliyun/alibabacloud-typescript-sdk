// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUrlModerationResultResponseBodyDataExtraInfo extends $dara.Model {
  /**
   * @remarks
   * The ICP number.
   * 
   * @example
   * xx
   */
  icpNo?: string;
  /**
   * @remarks
   * The type of the ICP filing.
   * 
   * @example
   * xx
   */
  icpType?: string;
  /**
   * @remarks
   * The type of site
   * 
   * @example
   * game
   */
  siteType?: string;
  static names(): { [key: string]: string } {
    return {
      icpNo: 'IcpNo',
      icpType: 'IcpType',
      siteType: 'SiteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icpNo: 'string',
      icpType: 'string',
      siteType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

