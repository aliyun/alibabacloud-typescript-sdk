// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopMoveRequest extends $dara.Model {
  /**
   * @remarks
   * The device ID.
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
   * Specifies whether to stop panning. The default value is false.
   * 
   * @example
   * true
   */
  pan?: boolean;
  /**
   * @remarks
   * Specifies whether to stop tilting. The default value is false.
   * 
   * @example
   * true
   */
  tilt?: boolean;
  /**
   * @remarks
   * Specifies whether to stop zooming. The default value is false.
   * 
   * @example
   * true
   */
  zoom?: boolean;
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
      pan: 'boolean',
      tilt: 'boolean',
      zoom: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

