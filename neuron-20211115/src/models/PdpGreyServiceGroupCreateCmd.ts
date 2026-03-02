// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PdpGreyServiceGroupCreateCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TEST
   */
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  serviceId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'env',
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      serviceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

