// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntrospectAppInstanceTicketForPreviewRequest extends $dara.Model {
  /**
   * @example
   * WS12345678
   */
  bizId?: string;
  /**
   * @example
   * ogxMqT04nnZOqdIqJZldbm-ZNsAVDz5mcqdCSudfX0SL61jjyWfV-ZnAO-OVpCt_aDl8xaaIO1OVkuvEcMn-HR_QddvaxMqIdsMY1cHdD4SDiRfOBGNdnpSdX9gG_Hi_.ab9c10816d913b51d87520ce0a72b2970668144c552689e9d9e211eb4529f0ea
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

