// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspiciousOverallConfigResponseBodyOverallConfig extends $dara.Model {
  /**
   * @remarks
   * The status of the feature. Valid values:
   * 
   * *   **off**: disabled
   * *   **on**: enabled
   * 
   * @example
   * on
   */
  config?: string;
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
   * @example
   * auto_breaking
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
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

export class DescribeSuspiciousOverallConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration.
   */
  overallConfig?: DescribeSuspiciousOverallConfigResponseBodyOverallConfig;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 6673D49C-A9AB-40DD-B4A2-B92306701AE7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      overallConfig: 'OverallConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overallConfig: DescribeSuspiciousOverallConfigResponseBodyOverallConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.overallConfig && typeof (this.overallConfig as any).validate === 'function') {
      (this.overallConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

