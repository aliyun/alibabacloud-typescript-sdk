// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateSuspiciousTargetConfigRequest extends $dara.Model {
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
   * 1.2.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The configuration of proactive defense for your server. The value includes the following fields:
   * 
   * *   **targetType**: specifies the dimension from which you manage proactive defense. UUIDs are supported. Set the value to **uuid**.
   * *   **target**: specifies the UUID of the server for which you want to configure proactive defense.
   * *   **flag**: specifies whether to enable or disable proactive defense for your server. Valid values are **add** and **del**. The value add indicates that proactive defense will be enabled for your server. The value del indicates that proactive defense will be disabled for your server.
   * 
   * This parameter is required.
   * 
   * @example
   * "[{"targetType":"uuid","target":"0585f81a-dd84-4ddf-9971-f59d12345678","flag":"add"},{"targetType":"uuid","target":"01acfd9d-e6a4-4e61-b9eb-aae012345678","flag":"add"},{"targetType":"uuid","target":"04a0e735-ad32-4835-b635-045812345678","flag":"add"}]"
   */
  targetOperations?: string;
  /**
   * @remarks
   * The dimension from which you manage proactive defense. Only the server UUID dimension is supported.
   * 
   * Set the value to **uuid**.
   * 
   * This parameter is required.
   * 
   * @example
   * uuid
   */
  targetType?: string;
  /**
   * @remarks
   * The type of proactive defense. Valid Values:
   * 
   * *   **auto_breaking**: automatic blocking
   * *   **webshell_cloud_breaking**: webshell defense
   * *   **alinet**: malicious behavior defense
   * *   **ransomware_breaking**: ransomware capture
   * *   **alisecguard**: client protection
   * 
   * This parameter is required.
   * 
   * @example
   * auto_breaking
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      targetOperations: 'TargetOperations',
      targetType: 'TargetType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      targetOperations: 'string',
      targetType: 'string',
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

