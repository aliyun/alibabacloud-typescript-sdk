// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserAdOrganizationUnitsResponseBodyOUNames extends $dara.Model {
  /**
   * @remarks
   * The name of the OU.
   * 
   * @example
   * wuying_computers
   */
  displayOUName?: string;
  /**
   * @remarks
   * The canonical name (CNAME) of the OU in the AD domain controller.
   * 
   * @example
   * example.com/wuying_computers
   */
  OUName?: string;
  /**
   * @remarks
   * The enterprise AD office network ID.
   * 
   * @example
   * cn-hangzhou+dir-485361****
   */
  officeSiteId?: string;
  static names(): { [key: string]: string } {
    return {
      displayOUName: 'DisplayOUName',
      OUName: 'OUName',
      officeSiteId: 'OfficeSiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayOUName: 'string',
      OUName: 'string',
      officeSiteId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

