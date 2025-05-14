// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDNADBResponseBodyDBList extends $dara.Model {
  /**
   * @remarks
   * The ID of the media fingerprint library.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2a12****
   */
  DBId?: string;
  /**
   * @remarks
   * The description of the media fingerprint library.
   */
  description?: string;
  /**
   * @remarks
   * The model of the media fingerprint library. Valid values:
   * 
   * *   **Video**
   * *   **Audio**
   * *   **Image**
   * *   **Text** (supported only in the China (Shanghai) region)
   * 
   * @example
   * Video
   */
  model?: string;
  /**
   * @remarks
   * The name of the media fingerprint library.
   * 
   * @example
   * example-name
   */
  name?: string;
  /**
   * @remarks
   * The state of the media fingerprint library. Default value: **offline**. ****Valid values:
   * 
   * *   **offline**: The media fingerprint library is offline.
   * *   **active**: The media fingerprint library is online.
   * *   **deleted**: The media fingerprint library is deleted.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBId: 'DBId',
      description: 'Description',
      model: 'Model',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBId: 'string',
      description: 'string',
      model: 'string',
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

