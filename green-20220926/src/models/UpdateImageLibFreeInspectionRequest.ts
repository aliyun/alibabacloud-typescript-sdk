// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageLibFreeInspectionRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration.
   * 
   * @example
   * {\\"2833014490001\\":0}
   */
  config?: { [key: string]: number };
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
      config: 'Config',
      regionId: 'RegionId',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      regionId: 'string',
      serviceCode: 'string',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

