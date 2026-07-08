// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContinuousAdjustRequest extends $dara.Model {
  /**
   * @remarks
   * Zoom speed parameter. A positive value increases the focal length.<br>Value range: -1.0 to 1.0<br>
   * 
   * @example
   * 0.5
   */
  focus?: string;
  /**
   * @remarks
   * Device ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 348*****380-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * Aperture speed parameter. A positive value increases the aperture.<br>Value range: -1.0 to 1.0<br>
   * 
   * @example
   * 0.5
   */
  iris?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      focus: 'Focus',
      id: 'Id',
      iris: 'Iris',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      focus: 'string',
      id: 'string',
      iris: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

