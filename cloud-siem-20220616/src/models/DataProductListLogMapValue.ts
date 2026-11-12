// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DataProductListLogMapValueExtraParameters extends $dara.Model {
  /**
   * @remarks
   * The identifier of the extended parameter.
   * 
   * @example
   * flag
   */
  key?: string;
  /**
   * @remarks
   * The value of the extended parameter.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataProductListLogMapValue extends $dara.Model {
  /**
   * @remarks
   * The log code.
   * 
   * @example
   * cloud_siem_config_log
   */
  logCode?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and can be ignored.
   * 
   * @example
   * audit log
   */
  logName?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and can be ignored.
   * 
   * @example
   * audit log
   */
  logNameEn?: string;
  /**
   * @remarks
   * The language code of the log, which is used to display multilingual names.
   * 
   * @example
   * ${sas.cloudsiem.prod.cloud_siem_aegis_crack_from_beaver}
   */
  logNameKey?: string;
  /**
   * @remarks
   * The log delivery status. Valid values:
   * - true: Delivery is in progress.  
   * - false: Delivery is disabled.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * Specifies whether the log delivery switch can be operated. Only the delegated administrator of Threat Analysis can operate the log delivery switch. Valid values:
   * - true: The switch can be operated.  
   * - false: The switch cannot be operated.
   * 
   * @example
   * true
   */
  canOperateOrNot?: boolean;
  /**
   * @remarks
   * The topic of the log in the Logstore. It is an index field of the Logstore and can be used to distinguish different logs.
   * 
   * @example
   * sas_login_event
   */
  topic?: string;
  /**
   * @remarks
   * The extended parameters.
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

