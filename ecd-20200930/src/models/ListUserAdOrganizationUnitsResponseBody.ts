// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserAdOrganizationUnitsResponseBodyOUNames } from "./ListUserAdOrganizationUnitsResponseBodyOunames";


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

