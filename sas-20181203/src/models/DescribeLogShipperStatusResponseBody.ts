// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogShipperStatusResponseBodyLogShipperStatus extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Security Center is authorized to access Log Service. Valid values:
   * 
   * *   **yes**
   * *   **no**
   * 
   * @example
   * yes
   */
  authStatus?: string;
  /**
   * @remarks
   * Indicates whether the log analysis feature is purchased. Valid values:
   * 
   * *   **yes**
   * *   **no**
   * 
   * @example
   * yes
   */
  buyStatus?: string;
  /**
   * @remarks
   * The version of the log analysis field. Valid values:
   * - SAS_V1
   * - SAS_V2
   * 
   * @example
   * SAS_V1
   */
  etlMetaVersion?: string;
  /**
   * @remarks
   * The status of the log analysis feature. Valid values:
   * 
   * *   **yes**: enabled
   * *   **no**: disabled
   * 
   * @example
   * yes
   */
  openStatus?: string;
  /**
   * @remarks
   * Indicates whether the pay-as-you-go billing method is used. Valid values:
   * 
   * *   **yes**
   * *   **no**
   * 
   * @example
   * no
   */
  postPaidOpenStatus?: string;
  /**
   * @remarks
   * Indicates whether the log analysis feature supports the pay-as-you-go billing method. Valid values:
   * 
   * *   **yes**
   * *   **no**
   * 
   * @example
   * yes
   */
  postPaidSupportStatus?: string;
  /**
   * @remarks
   * The status of the dedicated Log Service project. Valid values:
   * 
   * *   **Normal**: normal
   * *   **Disable**: disabled
   * 
   * @example
   * Normal
   */
  slsProjectStatus?: string;
  /**
   * @remarks
   * Indicates whether Log Service is activated. Valid values:
   * 
   * *   **yes**
   * *   **no**
   * 
   * @example
   * yes
   */
  slsServiceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      authStatus: 'AuthStatus',
      buyStatus: 'BuyStatus',
      etlMetaVersion: 'EtlMetaVersion',
      openStatus: 'OpenStatus',
      postPaidOpenStatus: 'PostPaidOpenStatus',
      postPaidSupportStatus: 'PostPaidSupportStatus',
      slsProjectStatus: 'SlsProjectStatus',
      slsServiceStatus: 'SlsServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authStatus: 'string',
      buyStatus: 'string',
      etlMetaVersion: 'string',
      openStatus: 'string',
      postPaidOpenStatus: 'string',
      postPaidSupportStatus: 'string',
      slsProjectStatus: 'string',
      slsServiceStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogShipperStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status information.
   */
  logShipperStatus?: DescribeLogShipperStatusResponseBodyLogShipperStatus;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 24A20733-10A0-4AF6-BE6B-E3322413****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logShipperStatus: 'LogShipperStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logShipperStatus: DescribeLogShipperStatusResponseBodyLogShipperStatus,
      requestId: 'string',
    };
  }

  validate() {
    if(this.logShipperStatus && typeof (this.logShipperStatus as any).validate === 'function') {
      (this.logShipperStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

