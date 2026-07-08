// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContinuousMoveRequest extends $dara.Model {
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
  ownerId?: number;
  /**
   * @remarks
   * Pan speed. A positive value moves the camera left.<br>
   * Valid values: -1.0 to 1.0<br>
   * 
   * @example
   * 0.5
   */
  pan?: string;
  /**
   * @remarks
   * Tilt speed. A positive value moves the camera up.<br>
   * Valid values: -1.0 to 1.0<br>
   * 
   * @example
   * 0.5
   */
  tilt?: string;
  /**
   * @remarks
   * Zoom speed. A positive value zooms in.<br>
   * Valid values: -1.0 to 1.0<br>
   * 
   * @example
   * 0.5
   */
  zoom?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      pan: 'Pan',
      tilt: 'Tilt',
      zoom: 'Zoom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ownerId: 'number',
      pan: 'string',
      tilt: 'string',
      zoom: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

