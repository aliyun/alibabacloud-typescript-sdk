// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScenePreviewDataRequest extends $dara.Model {
  /**
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @example
   * true/false
   */
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2735913e96da44ea8c86f8e777c8****
   */
  previewToken?: string;
  /**
   * @example
   * true/false
   */
  showTag?: boolean;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enabled: 'Enabled',
      previewToken: 'PreviewToken',
      showTag: 'ShowTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      previewToken: 'string',
      showTag: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

