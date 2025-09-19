// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallPmAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 58.35.xx.xx
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of the client.
   * 
   * *   **aliyun_assist**: Cloud Assistant client
   * *   **aliyun_monitor**: CloudMonitor client
   * 
   * This parameter is required.
   * 
   * @example
   * aliyun_monitor
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the server. If you specify multiple UUIDs, separate the UUIDs with commas (,).
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

