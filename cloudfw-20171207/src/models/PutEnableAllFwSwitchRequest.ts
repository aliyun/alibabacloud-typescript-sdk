// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEnableAllFwSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of your Cloud Firewall.
   * 
   * @example
   * i-2ze8v2x5kd9qyvp2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese (default)
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
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

