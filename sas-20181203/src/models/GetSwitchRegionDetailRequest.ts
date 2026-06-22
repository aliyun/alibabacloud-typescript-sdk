// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSwitchRegionDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The service switchover type. Valid values:
   * 
   * - **sg_switch**: The server connection is migrated from China to Singapore.
   * - **sls_meta_version_switch_stage_1**: The log analysis delivery field upgrade switchover.
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

