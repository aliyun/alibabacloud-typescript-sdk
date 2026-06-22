// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogShipperStatusResponseBodyLogShipperStatus extends $dara.Model {
  /**
   * @remarks
   * The service authorization status of the log analysis feature. Valid values:
   * 
   * - **yes**: authorized
   * - **no**: not authorized.
   * 
   * @example
   * yes
   */
  authStatus?: string;
  /**
   * @remarks
   * The purchase status of the log analysis feature. Valid values:
   * 
   * - **yes**: purchased
   * - **no**: not purchased.
   * 
   * @example
   * yes
   */
  buyStatus?: string;
  /**
   * @remarks
   * The version of the log delivery fields for log analysis. Valid values:
   * 
   * - **SAS_V1**
   * - **SAS_V2**.
   * 
   * @example
   * SAS_V1
   */
  etlMetaVersion?: string;
  /**
   * @remarks
   * The enabling status of log analysis. Valid values:
   * 
   * - **yes**: enabled
   * - **no**: not enabled.
   * 
   * @example
   * yes
   */
  openStatus?: string;
  /**
   * @remarks
   * The pay-as-you-go activation status of the log analysis feature. Valid values:
   * 
   * - **yes**: activated
   * - **no**: not activated.
   * 
   * @example
   * no
   */
  postPaidOpenStatus?: string;
  /**
   * @remarks
   * The pay-as-you-go support status of the log analysis feature. Valid values:
   * 
   * - **yes**: supported
   * - **no**: not supported.
   * 
   * @example
   * yes
   */
  postPaidSupportStatus?: string;
  /**
   * @remarks
   * The status of the log project used by the log analysis feature. Valid values:
   * 
   * - **Normal**: Normal.
   * - **Disable**: Disabled.
   * 
   * @example
   * Normal
   */
  slsProjectStatus?: string;
  /**
   * @remarks
   * The activation status of Simple Log Service (SLS). Valid values:
   * 
   * - **yes**: activated
   * - **no**: not activated.
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
   * The log delivery status collection.
   */
  logShipperStatus?: DescribeLogShipperStatusResponseBodyLogShipperStatus;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
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

