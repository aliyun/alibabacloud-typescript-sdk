// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateSuspiciousOverallConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The switch status. Valid values:
   * 
   * - **on**: Enable
   * - **off**: Disable
   * 
   * This parameter is required.
   * 
   * @example
   * off
   */
  config?: string;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether asset configuration is required. Default value: **false**. Valid values:
   * - **true**: Required
   * - **false**: Not required
   * > This value takes effect only when **config** is set to **on**.
   * 
   * @example
   * true
   */
  noTargetAsOn?: boolean;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 222.178.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The switch type. Valid values:
   * 
   * - **auto_breaking**: Anti-virus
   * - **ransomware_breaking**: Anti-ransomware (bait capture)
   * - **webshell_cloud_breaking**: Website backdoor connection defense
   * - **alinet**: Malicious network behavior defense
   * - **k8s_log_analysis**: Container K8s threat detection
   * - **alisecguard**: Client self-protection defense mode
   * 
   * This parameter is required.
   * 
   * @example
   * k8s_log_analysis
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      lang: 'Lang',
      noTargetAsOn: 'NoTargetAsOn',
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      lang: 'string',
      noTargetAsOn: 'boolean',
      sourceIp: 'string',
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

