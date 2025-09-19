// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSwitchRegionDetailRequest extends $dara.Model {
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
   * The type of the migration operation. Valid values:
   * 
   * *   **sg_switch**: the migration of a server from a region in the Chinese mainland to the Singapore region.
   * *   **sls_meta_version_switch_stage_1**: the upgrade of log dictionaries.
   * 
   * @example
   * sg_switch
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
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

