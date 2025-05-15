// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateUserInformationRequestDeliverySettings } from "./UpdateUserInformationRequestDeliverySettings";


export class UpdateUserInformationRequest extends $dara.Model {
  /**
   * @remarks
   * The modified delivery settings.
   */
  deliverySettings?: UpdateUserInformationRequestDeliverySettings;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      deliverySettings: 'DeliverySettings',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliverySettings: UpdateUserInformationRequestDeliverySettings,
      regionId: 'string',
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

