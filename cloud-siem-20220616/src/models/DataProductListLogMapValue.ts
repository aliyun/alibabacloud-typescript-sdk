// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataProductListLogMapValueExtraParameters } from "./DataProductListLogMapValueExtraParameters";


export class DataProductListLogMapValue extends $dara.Model {
  /**
   * @remarks
   * The code of the log.
   * 
   * @example
   * cloud_siem_config_log
   */
  logCode?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * audit log
   */
  logName?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * audit log
   */
  logNameEn?: string;
  /**
   * @remarks
   * The language code of the log that is used to indicate the language in which the log is displayed.
   * 
   * @example
   * ${sas.cloudsiem.prod.cloud_siem_aegis_crack_from_beaver}
   */
  logNameKey?: string;
  /**
   * @remarks
   * The status of the log delivery. Valid values:
   * 
   * *   true: The logs are being delivered.
   * *   false: The log delivery feature is disabled.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * Indicates whether the log delivery feature can be enabled or disabled. The feature can be enabled or disabled only by the administrator of the threat analysis feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  canOperateOrNot?: boolean;
  /**
   * @remarks
   * The topic of the log in the Logstore. The value is an index field in the Logstore that can be used to distinguish different logs.
   * 
   * @example
   * sas_login_event
   */
  topic?: string;
  /**
   * @remarks
   * The extended parameter.
   */
  extraParameters?: DataProductListLogMapValueExtraParameters[];
  static names(): { [key: string]: string } {
    return {
      logCode: 'LogCode',
      logName: 'LogName',
      logNameEn: 'LogNameEn',
      logNameKey: 'LogNameKey',
      status: 'Status',
      canOperateOrNot: 'CanOperateOrNot',
      topic: 'Topic',
      extraParameters: 'ExtraParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logCode: 'string',
      logName: 'string',
      logNameEn: 'string',
      logNameKey: 'string',
      status: 'boolean',
      canOperateOrNot: 'boolean',
      topic: 'string',
      extraParameters: { 'type': 'array', 'itemType': DataProductListLogMapValueExtraParameters },
    };
  }

  validate() {
    if(Array.isArray(this.extraParameters)) {
      $dara.Model.validateArray(this.extraParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

