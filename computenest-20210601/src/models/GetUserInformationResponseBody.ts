// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserInformationResponseBodyDeliverySettings } from "./GetUserInformationResponseBodyDeliverySettings";


export class GetUserInformationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The delivery settings.
   */
  deliverySettings?: GetUserInformationResponseBodyDeliverySettings;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 52EBAF16-22F6-53DB-AE1E-44764FC62AF0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deliverySettings: 'DeliverySettings',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliverySettings: GetUserInformationResponseBodyDeliverySettings,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deliverySettings && typeof (this.deliverySettings as any).validate === 'function') {
      (this.deliverySettings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

