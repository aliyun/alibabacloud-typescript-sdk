// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallPmAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 58.35.xx.xx
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of the O&M plugin. Valid values:
   * - **aliyun_monitor**: CloudMonitor agent.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun_monitor
   */
  type?: string;
  /**
   * @remarks
   * The list of server UUIDs. Separate multiple UUIDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * inet-a6444920-d303-4ccf-ab87-a1d3cd49****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      type: 'Type',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      type: 'string',
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

