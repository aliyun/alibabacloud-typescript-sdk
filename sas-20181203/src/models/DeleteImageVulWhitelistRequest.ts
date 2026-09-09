// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImageVulWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the vulnerability whitelists. Separate multiple IDs with commas (,). This parameter is essentially required. If this parameter is not specified, the API returns an error response with Code: -101 (illegal parameter, param is ids).
   * 
   * @example
   * 123
   */
  ids?: string;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

