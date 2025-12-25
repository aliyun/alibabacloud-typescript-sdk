// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotspotConfigRequest extends $dara.Model {
  /**
   * @example
   * www.aliyundoc.com
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
   * 344794c32937474a9c59eb130936****
   */
  previewToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enabled: 'Enabled',
      previewToken: 'PreviewToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      previewToken: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

