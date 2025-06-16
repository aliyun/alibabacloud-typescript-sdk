// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHaVipResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the HAVIP.
   * 
   * @example
   * havip-2zeo05qre24nhrqpy****
   */
  haVipId?: string;
  /**
   * @remarks
   * The IP address of the HAVIP.
   * 
   * @example
   * 192.XX.XX.10
   */
  ipAddress?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C44F62BE-9CE7-4277-B117-69243F3988BF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      haVipId: 'HaVipId',
      ipAddress: 'IpAddress',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVipId: 'string',
      ipAddress: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

