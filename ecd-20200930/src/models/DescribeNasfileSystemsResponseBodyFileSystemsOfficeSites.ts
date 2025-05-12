// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNASFileSystemsResponseBodyFileSystemsOfficeSites extends $dara.Model {
  /**
   * @remarks
   * The ID of the office network.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The name of the office network.
   * 
   * @example
   * DemoOfficeNetwork
   */
  officeSiteName?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: 'string',
      officeSiteName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

