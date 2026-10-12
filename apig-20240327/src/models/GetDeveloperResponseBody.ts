// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeveloperResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The developer ID. This ID can be used to identify the developer in API operations such as SetHiMarketDeveloperStatus and DeleteHiMarketDeveloper.
   * 
   * @example
   * dev-xxxxxxxx
   */
  developerId?: string;
  /**
   * @remarks
   * The ID of the portal to which the developer belongs. This ID can be used to identify the portal in API operations such as GetPortal, UpdatePortal, and DeletePortal.
   * 
   * @example
   * portal-xxxxxxxx
   */
  portalId?: string;
  /**
   * @remarks
   * The developer status. Valid values: PENDING, APPROVED, and REJECTED.
   * 
   * @example
   * APPROVED
   */
  status?: string;
  /**
   * @remarks
   * The logon username of the developer.
   * 
   * @example
   * developer-demo
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      developerId: 'developerId',
      portalId: 'portalId',
      status: 'status',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      developerId: 'string',
      portalId: 'string',
      status: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeveloperResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetDeveloperResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDeveloperResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

