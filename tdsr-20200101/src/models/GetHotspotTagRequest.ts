// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotspotTagRequest extends $dara.Model {
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
   * @example
   * 344794c32937474a9c59eb130936****
   */
  previewToken?: string;
  /**
   * @example
   * 123456
   */
  subSceneUuid?: string;
  /**
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enabled: 'Enabled',
      previewToken: 'PreviewToken',
      subSceneUuid: 'SubSceneUuid',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      previewToken: 'string',
      subSceneUuid: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

