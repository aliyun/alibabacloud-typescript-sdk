// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScenePreviewResourceRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  draft?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2deb941b3e1****
   */
  previewToken?: string;
  static names(): { [key: string]: string } {
    return {
      draft: 'Draft',
      previewToken: 'PreviewToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      draft: 'boolean',
      previewToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

