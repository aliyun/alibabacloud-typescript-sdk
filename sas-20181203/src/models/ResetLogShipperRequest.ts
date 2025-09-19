// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetLogShipperRequestLogMetaList extends $dara.Model {
  /**
   * @remarks
   * The Logstore that you want to configure.
   * 
   * >  You can call the [DescribeLogMeta](~~DescribeLogMeta~~) operation to query the Logstore.
   * 
   * @example
   * sas-security-log
   */
  configLogStore?: string;
  /**
   * @remarks
   * The retention period of hot data in the Logstore.
   * 
   * >  The value of this parameter must be at least 7 and smaller than the log retention period. Unit: days. If you specify this parameter for the Logstore, the global retention period of hot data specified by the HotTtl parameter is overwritten.
   * 
   * @example
   * 7
   */
  hotTtl?: number;
  /**
   * @remarks
   * The status of the log analysis feature. Valid values:
   * 
   * *   **disabled**
   * *   **enabled**
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The log retention period of the Logstore.
   * 
   * >  If you specify this parameter for the Logstore, the global log retention period specified by the Ttl parameter is overwritten.
   * 
   * @example
   * 60
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      configLogStore: 'ConfigLogStore',
      hotTtl: 'HotTtl',
      status: 'Status',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configLogStore: 'string',
      hotTtl: 'number',
      status: 'string',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetLogShipperRequest extends $dara.Model {
  /**
   * @remarks
   * The global retention period of hot data.
   * 
   * >  The value of this parameter must be at least 7 and smaller than the log retention period. Unit: days.
   * 
   * @example
   * 7
   */
  hotTtl?: number;
  /**
   * @remarks
   * The settings of the log analysis feature.
   */
  logMetaList?: ResetLogShipperRequestLogMetaList[];
  /**
   * @remarks
   * The global log retention period.
   * 
   * >  This parameter is supported only when the log analysis feature uses the pay-as-you-go billing method.
   * 
   * @example
   * 180
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      hotTtl: 'HotTtl',
      logMetaList: 'LogMetaList',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotTtl: 'number',
      logMetaList: { 'type': 'array', 'itemType': ResetLogShipperRequestLogMetaList },
      ttl: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logMetaList)) {
      $dara.Model.validateArray(this.logMetaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

