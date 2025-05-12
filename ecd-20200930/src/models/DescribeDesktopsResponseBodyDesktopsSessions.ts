// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopsResponseBodyDesktopsSessions extends $dara.Model {
  /**
   * @remarks
   * The ID of the end user that connects to the cloud computer.
   * 
   * @example
   * 29615820929547****
   */
  endUserId?: string;
  /**
   * @remarks
   * The time when the cloud computer session was established.
   * 
   * @example
   * 2021-03-07T08:23Z
   */
  establishmentTime?: string;
  /**
   * @remarks
   * The name of the external user.
   * 
   * @example
   * Testname
   */
  externalUserName?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      establishmentTime: 'EstablishmentTime',
      externalUserName: 'ExternalUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      establishmentTime: 'string',
      externalUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

