// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFpShotDBResponseBodyFpShotDBListFpShotDB extends $dara.Model {
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
   * The ID of the media fingerprint library.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2a12****
   */
  fpDBId?: string;
  /**
   * @remarks
   * The model ID of the media fingerprint library. A value of **11** indicates that the library is a text fingerprint library. A value of **12** indicates that the library is a video fingerprint library. A value of **13** indicates that the library is an audio fingerprint library. A value of **14** indicates that the library is an image fingerprint library.
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
   * test-****
   */
  name?: string;
  /**
   * @remarks
   * The status of the media fingerprint library. Default value: **offline**. ****Valid values:
   * 
   * *   **offline**: The media fingerprint library is offline.
   * *   **active**: The media fingerprint library is online.
   * *   **paused**: The media fingerprint library is paused.
   * *   **deleted**: The media fingerprint library is deleted.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fpDBId: 'FpDBId',
      modelId: 'ModelId',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fpDBId: 'string',
      modelId: 'number',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

