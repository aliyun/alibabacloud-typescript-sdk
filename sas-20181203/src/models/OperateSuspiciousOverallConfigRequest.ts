// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateSuspiciousOverallConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the feature. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * This parameter is required.
   * 
   * @example
   * off
   */
  config?: string;
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
   * Specifies whether to configure assets for the feature. Default value: **false**. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * >  This parameter takes effect only when you set **Config** to **on**.
   * 
   * @example
   * true
   */
  noTargetAsOn?: boolean;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 222.178.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of the feature. Valid values:
   * 
   * *   **auto_breaking**: Anti-Virus
   * *   **ransomware_breaking**: Anti-ransomware (Bait Capture)
   * *   **webshell_cloud_breaking**: Webshell Protection
   * *   **alinet**: Behavior prevention
   * *   **k8s_log_analysis**: K8s Threat Detection
   * *   **alisecguard**: Defense mode for Client Protection
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

