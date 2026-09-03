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

export class ListUserAdOrganizationUnitsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * CAAAAA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The OUs of the AD domain.
   */
  OUNames?: ListUserAdOrganizationUnitsResponseBodyOUNames[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      OUNames: 'OUNames',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      OUNames: { 'type': 'array', 'itemType': ListUserAdOrganizationUnitsResponseBodyOUNames },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.OUNames)) {
      $dara.Model.validateArray(this.OUNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

