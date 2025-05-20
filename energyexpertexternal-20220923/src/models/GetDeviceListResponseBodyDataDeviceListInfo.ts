// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceListResponseBodyDataDeviceListInfo extends $dara.Model {
  /**
   * @remarks
   * The rated capacity.
   * Unit is kVA.
   * 
   * @example
   * 100
   */
  constKva?: number;
  /**
   * @remarks
   * The transformation ratio of current.
   * 
   * @example
   * 1
   */
  ct?: number;
  /**
   * @remarks
   * The magnification ratio.
   * 
   * @example
   * 80
   */
  magnification?: number;
  /**
   * @remarks
   * The high and low voltage.
   * 
   * @example
   * 0
   */
  pressure?: number;
  /**
   * @remarks
   * The transformation ratio of voltage.
   * 
   * @example
   * 80
   */
  pt?: number;
  static names(): { [key: string]: string } {
    return {
      constKva: 'constKva',
      ct: 'ct',
      magnification: 'magnification',
      pressure: 'pressure',
      pt: 'pt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constKva: 'number',
      ct: 'number',
      magnification: 'number',
      pressure: 'number',
      pt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

