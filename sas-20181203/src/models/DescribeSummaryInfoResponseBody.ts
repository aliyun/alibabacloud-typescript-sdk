// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSummaryInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of unprotected assets.
   * 
   * @example
   * 12
   */
  aegisClientOfflineCount?: number;
  /**
   * @remarks
   * The number of protected assets.
   * 
   * @example
   * 127
   */
  aegisClientOnlineCount?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * D40198E1-6EA8-482E-B3C7-D9573D75C0CA
   */
  requestId?: string;
  /**
   * @remarks
   * The security score of the assets. Valid values:
   * 
   * *   95 to 100: The assets are secure.
   * *   85 to 94: The assets are exposed to a few security risks. We recommend that you reinforce your security system in a timely manner.
   * *   70 to 84: The assets are exposed to multiple security risks. We recommend that you reinforce your security system in a timely manner.
   * *   69 or lower: The current security system is unable to protect the assets against intrusions. We recommend that you reinforce your security system at the earliest opportunity.
   * 
   * @example
   * 44
   */
  securityScore?: number;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      aegisClientOfflineCount: 'AegisClientOfflineCount',
      aegisClientOnlineCount: 'AegisClientOnlineCount',
      requestId: 'RequestId',
      securityScore: 'SecurityScore',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aegisClientOfflineCount: 'number',
      aegisClientOnlineCount: 'number',
      requestId: 'string',
      securityScore: 'number',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

