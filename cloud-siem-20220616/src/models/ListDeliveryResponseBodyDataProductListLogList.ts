// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDeliveryResponseBodyDataProductListLogListExtraParameters } from "./ListDeliveryResponseBodyDataProductListLogListExtraParameters";


export class ListDeliveryResponseBodyDataProductListLogList extends $dara.Model {
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
   * The extended parameter.
   */
  extraParameters?: ListDeliveryResponseBodyDataProductListLogListExtraParameters[];
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
   * The topic of the log in the Logstore. The value is an index field in the Logstore that can be used to distinguish different logs.
   * 
   * @example
   * sas_login_event
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      canOperateOrNot: 'CanOperateOrNot',
      extraParameters: 'ExtraParameters',
      logCode: 'LogCode',
      logName: 'LogName',
      logNameEn: 'LogNameEn',
      logNameKey: 'LogNameKey',
      status: 'Status',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canOperateOrNot: 'boolean',
      extraParameters: { 'type': 'array', 'itemType': ListDeliveryResponseBodyDataProductListLogListExtraParameters },
      logCode: 'string',
      logName: 'string',
      logNameEn: 'string',
      logNameKey: 'string',
      status: 'boolean',
      topic: 'string',
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

