// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompleteAssetUploadShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the upload session returned by BeginAssetUpload to prevent delayed confirmations from affecting subsequent uploads.
   * 
   * This parameter is required.
   */
  bodyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

