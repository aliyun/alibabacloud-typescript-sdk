// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AutopilotPolicy } from "./AutopilotPolicy";


export class UpdateAutopilotPolicyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic tuning is enabled. A value of true indicates that automatic tuning is active (ACTIVE), and a value of false indicates that tuning is not enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The tuning policy configuration. This parameter uses full PUT mode: when specified, the complete policy object replaces the existing configuration entirely (fields not included are cleared). If this parameter is not specified, the existing configuration is retained.
   */
  policyConfig?: AutopilotPolicy;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      policyConfig: 'policyConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      policyConfig: AutopilotPolicy,
    };
  }

  validate() {
    if(this.policyConfig && typeof (this.policyConfig as any).validate === 'function') {
      (this.policyConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAutopilotPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Autopilot tuning policy response data.
   */
  data?: UpdateAutopilotPolicyResponseBodyData;
  /**
   * @remarks
   * The error code. This parameter is not empty when success is false, indicating a business error code. This parameter is empty when success is true.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. This parameter is not empty when success is false, indicating a business error message. This parameter is empty when success is true.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code, which is always 200. Use the success parameter to determine whether the request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateAutopilotPolicyResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

