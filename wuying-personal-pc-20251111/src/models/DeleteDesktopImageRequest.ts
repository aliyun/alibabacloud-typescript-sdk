// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDesktopImageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  imageId?: string;
  isCleanImageCode?: boolean;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      imageId: 'ImageId',
      isCleanImageCode: 'IsCleanImageCode',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      imageId: 'string',
      isCleanImageCode: 'boolean',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

