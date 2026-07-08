// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The remaining quota for automatic reissue.
   * 
   * @example
   * 1
   */
  autoReissueCount?: number;
  /**
   * @remarks
   * The remaining certificate quota.
   * 
   * @example
   * 1
   */
  certificateCount?: number;
  /**
   * @remarks
   * The total number of inactive instances.
   * 
   * @example
   * 1
   */
  inactiveCount?: number;
  /**
   * @remarks
   * The unique ID of the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 09470F19-CEE8-5C63-BF2C-02B5E3F07A17
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of instances that are about to expire.
   * 
   * @example
   * 1
   */
  willExpireCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoReissueCount: 'AutoReissueCount',
      certificateCount: 'CertificateCount',
      inactiveCount: 'InactiveCount',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      willExpireCount: 'WillExpireCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReissueCount: 'number',
      certificateCount: 'number',
      inactiveCount: 'number',
      requestId: 'string',
      totalCount: 'number',
      willExpireCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

