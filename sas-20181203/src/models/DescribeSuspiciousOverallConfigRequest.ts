// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspiciousOverallConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 39.161.XX.XX
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
   * auto_breaking
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

