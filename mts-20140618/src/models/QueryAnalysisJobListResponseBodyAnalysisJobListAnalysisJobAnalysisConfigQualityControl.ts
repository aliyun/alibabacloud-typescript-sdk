// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigQualityControl extends $dara.Model {
  /**
   * @remarks
   * The playback mode. Valid values:
   * 
   * *   **network**: online playback.
   * *   **local**: playback on on-premises devices.
   * *   Default value: **network**.
   * 
   * @example
   * network
   */
  methodStreaming?: string;
  /**
   * @remarks
   * The quality level of the job output. Default value: **25**.
   * 
   * @example
   * 25
   */
  rateQuality?: string;
  static names(): { [key: string]: string } {
    return {
      methodStreaming: 'MethodStreaming',
      rateQuality: 'RateQuality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      methodStreaming: 'string',
      rateQuality: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

