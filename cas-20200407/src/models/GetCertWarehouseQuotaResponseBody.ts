// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCertWarehouseQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total quota for the certificate application service. This includes both complimentary and purchased quotas.
   * 
   * @example
   * 5000
   */
  appTotalQuota?: number;
  /**
   * @remarks
   * The used quota for the certificate application service.
   * 
   * @example
   * 1000
   */
  appUseCount?: number;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates this unique ID for each request. Use this ID to troubleshoot issues.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The total quota for the electronic contract signing service. This includes both complimentary and purchased quotas.
   * 
   * @example
   * 5000
   */
  totalQuota?: number;
  /**
   * @remarks
   * The used quota for the electronic contract signing service.
   * 
   * @example
   * 1000
   */
  useCount?: number;
  static names(): { [key: string]: string } {
    return {
      appTotalQuota: 'AppTotalQuota',
      appUseCount: 'AppUseCount',
      requestId: 'RequestId',
      totalQuota: 'TotalQuota',
      useCount: 'UseCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appTotalQuota: 'number',
      appUseCount: 'number',
      requestId: 'string',
      totalQuota: 'number',
      useCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

