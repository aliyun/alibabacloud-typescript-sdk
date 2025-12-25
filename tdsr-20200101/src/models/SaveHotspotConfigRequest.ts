// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveHotspotConfigRequest extends $dara.Model {
  /**
   * @example
   * {enabledTitleTag: 0, watermarkImg: []}
   */
  paramTag?: string;
  /**
   * @example
   * 5dc5c2dd927e45039dadb312384b****
   */
  previewToken?: string;
  static names(): { [key: string]: string } {
    return {
      paramTag: 'ParamTag',
      previewToken: 'PreviewToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramTag: 'string',
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

