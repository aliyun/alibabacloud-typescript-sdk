// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageLibFreeInspectionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration.
   * 
   * @example
   * {\\"2833014490001\\":0}
   */
  configShrink?: string;
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
      configShrink: 'Config',
      regionId: 'RegionId',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configShrink: 'string',
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

