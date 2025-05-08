// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceInstanceAttributeRequestLicenseData extends $dara.Model {
  /**
   * @remarks
   * The Custom Data
   * 
   * @example
   * {"Test"}
   */
  customData?: string;
  static names(): { [key: string]: string } {
    return {
      customData: 'CustomData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

