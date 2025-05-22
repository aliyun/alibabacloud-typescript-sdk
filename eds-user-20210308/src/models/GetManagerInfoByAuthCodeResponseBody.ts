// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetManagerInfoByAuthCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * 12345678901234****
   */
  orgId?: string;
  /**
   * @remarks
   * The mobile number.
   * 
   * @example
   * 1301234****
   */
  phone?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The team name.
   * 
   * @example
   * devteam
   */
  teamName?: string;
  /**
   * @remarks
   * The tenant name.
   * 
   * @example
   * zhangsan
   */
  userName?: string;
  /**
   * @remarks
   * The ID of the Elastic Desktop Service account.
   * 
   * @example
   * 12345678901234****
   */
  waId?: number;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      phone: 'Phone',
      requestId: 'RequestId',
      teamName: 'TeamName',
      userName: 'UserName',
      waId: 'WaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      phone: 'string',
      requestId: 'string',
      teamName: 'string',
      userName: 'string',
      waId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

