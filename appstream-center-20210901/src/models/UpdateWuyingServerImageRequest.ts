// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWuyingServerImageRequest extends $dara.Model {
  /**
   * @example
   * imgc-0aae4rgk9****6e8p
   */
  imageId?: string;
  /**
   * @example
   * WuyingServer
   */
  productType?: string;
  /**
   * @example
   * ws-0bw2f11****dial
   */
  wuyingServerId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      productType: 'ProductType',
      wuyingServerId: 'WuyingServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      productType: 'string',
      wuyingServerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

