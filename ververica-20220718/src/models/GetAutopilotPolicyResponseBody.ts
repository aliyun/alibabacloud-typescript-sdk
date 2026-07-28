// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AutopilotPolicy } from "./AutopilotPolicy";


export class GetAutopilotPolicyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic tuning is enabled. A value of true indicates that automatic tuning is in the ACTIVE state. A value of false indicates that tuning is not enabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The tuning policy configuration.
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

export class GetAutopilotPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Autopilot tuning policy response data.
   */
  data?: GetAutopilotPolicyResponseBodyData;
  /**
   * @remarks
   * The business error code. This field is not empty when success is false. This field is empty when success is true.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * The business error message. This field is not empty when success is false. This field is empty when success is true.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The business status code, which is always 200. Use the success field to determine whether the request was successful.
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
   * true
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
      data: GetAutopilotPolicyResponseBodyData,
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

