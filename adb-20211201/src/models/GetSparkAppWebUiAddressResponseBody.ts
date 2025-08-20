// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkAppWebUiAddressResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Spark application ID.
   * 
   * @example
   * s202205201533hz1209892000****
   */
  appId?: string;
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * amv-clusterxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The expiration time. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1655801973000
   */
  expirationTimeInMillis?: number;
  /**
   * @remarks
   * The URL of the web UI for the Spark application.
   * 
   * @example
   * https://adbsparkui-cn-hangzhou.aliyuncs.com/?token=****
   */
  webUiAddress?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      DBClusterId: 'DBClusterId',
      expirationTimeInMillis: 'ExpirationTimeInMillis',
      webUiAddress: 'WebUiAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      DBClusterId: 'string',
      expirationTimeInMillis: 'number',
      webUiAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSparkAppWebUiAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetSparkAppWebUiAddressResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSparkAppWebUiAddressResponseBodyData,
      requestId: 'string',
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

