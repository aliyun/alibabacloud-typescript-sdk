// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageLibRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The selected service identifier.
   * 
   * @example
   * response_security_check
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

