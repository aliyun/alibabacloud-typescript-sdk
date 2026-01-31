// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceSummaryResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  autoReissueCount?: number;
  /**
   * @example
   * 1
   */
  certificateCount?: number;
  /**
   * @example
   * 1
   */
  inactiveCount?: number;
  /**
   * @example
   * 09470F19-CEE8-5C63-BF2C-02B5E3F07A17
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  /**
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

