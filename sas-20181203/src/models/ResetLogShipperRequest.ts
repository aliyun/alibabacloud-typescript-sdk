// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetLogShipperRequestLogMetaList extends $dara.Model {
  /**
   * @remarks
   * The Logstore to be configured.
   * > You can call the [DescribeLogMeta](~~DescribeLogMeta~~) operation to obtain the value of this parameter.
   * 
   * @example
   * sas-security-log
   */
  configLogStore?: string;
  /**
   * @remarks
   * The data retention period in the hot storage tier of the Logstore.
   * 
   * > Valid values: greater than or equal to 7 days and less than the log retention period. Specifying the data retention period in the hot storage tier for a single Logstore overrides the global settings.
   * 
   * @example
   * 7
   */
  hotTtl?: number;
  /**
   * @remarks
   * The current enabling status. Valid values:
   * - **disabled**: The feature is disabled.
   * - **enabled**: The feature is enabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The log retention period of the Logstore in days.
   * 
   * > Specifying the log retention period for a single Logstore overrides the global settings.
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
   * The global data retention period in the hot storage tier.
   * 
   * > Valid values: greater than or equal to 7 days and less than the log retention period.
   * 
   * @example
   * 7
   */
  hotTtl?: number;
  /**
   * @remarks
   * The configuration information for log analysis in Security Center.
   */
  logMetaList?: ResetLogShipperRequestLogMetaList[];
  /**
   * @remarks
   * The global log retention period in days.
   * 
   * > This parameter is supported only in the pay-as-you-go billing mode for logs.
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

