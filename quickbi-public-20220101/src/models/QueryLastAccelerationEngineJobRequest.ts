// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLastAccelerationEngineJobRequest extends $dara.Model {
  /**
   * @remarks
   * Dataset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d23d30c0-****-6c92bf668356
   */
  cubeId?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

