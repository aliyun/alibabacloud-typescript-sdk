// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFpShotDBResponseBodyFpShotDB extends $dara.Model {
  /**
   * @remarks
   * The configurations of the media fingerprint library.
   * 
   * @example
   * null
   */
  config?: string;
  /**
   * @remarks
   * The description of the media fingerprint library.
   * 
   * @example
   * The library is a text fingerprint library.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the media fingerprint library. We recommend that you keep this ID for subsequent operation calls.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2a12****
   */
  fpDBId?: string;
  /**
   * @remarks
   * The model ID of the media fingerprint library.
   * 
   * @example
   * 11
   */
  modelId?: number;
  /**
   * @remarks
   * The name of the media fingerprint library.
   * 
   * @example
   * example-name-****
   */
  name?: string;
  /**
   * @remarks
   * The status of the media fingerprint library. After the media fingerprint library is created, it enters the **offline** state. After the media fingerprint library is processed at the backend, it enters the **active** state.
   * 
   * @example
   * offline
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      description: 'Description',
      fpDBId: 'FpDBId',
      modelId: 'ModelId',
      name: 'Name',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      description: 'string',
      fpDBId: 'string',
      modelId: 'number',
      name: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

