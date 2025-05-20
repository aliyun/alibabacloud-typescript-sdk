// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDasProServiceUsageResponseBodyData } from "./GetDasProServiceUsageResponseBodyData";


export class GetDasProServiceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * {         "storageFreeQuotaInMB": 5120,         "ip": "rm-2ze8g2am97624****.mysql.****.com",         "custinsId": 12448331,         "userId": "196278346919****",         "uuid": "hdm_b0ae36343407609bf3e8df8709d8****",         "expireTime": 1924963200000,         "instanceId": "rm-2ze8g2am97624****",         "storageUsed": 10773752667393,         "engine": "MySQL",         "instanceAlias": "TESTDB01_PROD",         "port": 3310,         "vpcId": "hdm_****",         "commodityInstanceId": "daspro-****",         "startTime": 1606381940000,         "isSpare": false,         "region": "cn-shanghai",         "serviceUnitId": "5",         "sqlRetention": 30     }
   */
  data?: GetDasProServiceUsageResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7172BECE-588A-5961-8126-C216E16B****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetDasProServiceUsageResponseBodyData,
      message: 'string',
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

