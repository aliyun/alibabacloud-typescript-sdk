// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSasPmAgentListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the server. Separate multiple UUIDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * inet-cb7ae5ee-b2bc-4581-b616-62495f5d****,inet-37cf0e4f-55cc-4b84-8073-b348b4b4****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

