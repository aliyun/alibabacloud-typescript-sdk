// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogtailConfigOutputDetail extends $dara.Model {
  /**
   * @remarks
   * The endpoint. For more information, see [Endpoints](https://help.aliyun.com/document_detail/29008.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-intranet.log.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstoreName?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The type of observable data in the Logstore.
   * 
   * @example
   * logs
   */
  telemetryType?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
      logstoreName: 'logstoreName',
      region: 'region',
      telemetryType: 'telemetryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      logstoreName: 'string',
      region: 'string',
      telemetryType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogtailConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the Logtail configuration. The name must be unique in the project to which the Logtail configuration belongs. After the Logtail configuration is created, you cannot change the name of the Logtail configuration. The name must meet the following requirements:
   * 
   * *   The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * *   The name must start and end with a lowercase letter or a digit.
   * *   The name must be 2 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test-config
   */
  configName?: string;
  /**
   * @remarks
   * The time at which the Logtail configuration was created. The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1655176807
   */
  createTime?: number;
  /**
   * @remarks
   * The detailed settings of the data source. For more information, see [inputDetail](https://help.aliyun.com/document_detail/29058.html).
   * 
   * This parameter is required.
   * 
   * @example
   * "logType": "common_reg_log", "logPath": "/var/log/httpd/", "filePattern": "access*.log", "localStorage": true, "timeFormat": "%Y/%m/%d %H:%M:%S", "logBeginRegex": ".*", "regex": "(\\w+)(\\s+)", "key" :["key1", "key2"], "filterKey":["key1"], "filterRegex":["regex1"], "fileEncoding":"utf8", "topicFormat": "none"
   */
  inputDetail?: { [key: string]: any };
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   **plugin**: Logs such as MySQL binary logs are collected by using Logtail plug-ins.
   * *   **file**: Logs from text files are collected by using existing modes, including the full regex mode and delimiter mode.
   * 
   * This parameter is required.
   * 
   * @example
   * file
   */
  inputType?: string;
  /**
   * @remarks
   * The time at which the Logtail configuration was last modified. The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1655176807
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * The sample log.
   * 
   * @example
   * 2022-06-14 11:13:29.796 | DEBUG    | __main__:<module>:1 - hello world
   */
  logSample?: string;
  /**
   * @remarks
   * The detailed settings of the data destination. For more information, see [outputDetail](https://help.aliyun.com/document_detail/29058.html).
   * 
   * This parameter is required.
   */
  outputDetail?: LogtailConfigOutputDetail;
  /**
   * @remarks
   * The type of the data destination. Set the value to LogService. Collected logs can be uploaded to only Simple Log Service.
   * 
   * This parameter is required.
   * 
   * @example
   * LogService
   */
  outputType?: string;
  static names(): { [key: string]: string } {
    return {
      configName: 'configName',
      createTime: 'createTime',
      inputDetail: 'inputDetail',
      inputType: 'inputType',
      lastModifyTime: 'lastModifyTime',
      logSample: 'logSample',
      outputDetail: 'outputDetail',
      outputType: 'outputType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      createTime: 'number',
      inputDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      inputType: 'string',
      lastModifyTime: 'number',
      logSample: 'string',
      outputDetail: LogtailConfigOutputDetail,
      outputType: 'string',
    };
  }

  validate() {
    if(this.inputDetail) {
      $dara.Model.validateMap(this.inputDetail);
    }
    if(this.outputDetail && typeof (this.outputDetail as any).validate === 'function') {
      (this.outputDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

