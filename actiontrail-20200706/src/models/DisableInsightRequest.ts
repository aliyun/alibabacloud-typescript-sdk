// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableInsightRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the Insights event. Valid values:
   * 
   * - IpInsight: IP request events.
   * 
   * - ApiCallRateInsight: High-risk API call events.
   * 
   * - ApiErrorRateInsight: API error events.
   * 
   * - AkInsight: AccessKey pair call events.
   * 
   * - PolicyChangeInsight: Permission change events.
   * 
   * - PasswordChangeInsight: Password change events.
   * 
   * - TrailConcealmentInsight: Trail concealment events.
   * 
   * @example
   * IpInsight
   */
  insightType?: string;
  static names(): { [key: string]: string } {
    return {
      insightType: 'InsightType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insightType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

