// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiSecurityGuardConfig } from "./AiSecurityGuardConfig";
import { AiStatisticsConfig } from "./AiStatisticsConfig";


export class ModelApiPolicyConfig extends $dara.Model {
  /**
   * @remarks
   * The AI security protection settings.
   */
  aiSecurityGuardConfig?: AiSecurityGuardConfig;
  /**
   * @remarks
   * The AI observability and request log configuration.
   */
  aiStatisticsConfig?: AiStatisticsConfig;
  /**
   * @remarks
   * Specifies whether to enable the policy.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The policy type. Only AiStatistics and AiSecurityGuard are supported.
   * 
   * @example
   * AiStatistics
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aiSecurityGuardConfig: 'aiSecurityGuardConfig',
      aiStatisticsConfig: 'aiStatisticsConfig',
      enable: 'enable',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiSecurityGuardConfig: AiSecurityGuardConfig,
      aiStatisticsConfig: AiStatisticsConfig,
      enable: 'boolean',
      type: 'string',
    };
  }

  validate() {
    if(this.aiSecurityGuardConfig && typeof (this.aiSecurityGuardConfig as any).validate === 'function') {
      (this.aiSecurityGuardConfig as any).validate();
    }
    if(this.aiStatisticsConfig && typeof (this.aiStatisticsConfig as any).validate === 'function') {
      (this.aiStatisticsConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

