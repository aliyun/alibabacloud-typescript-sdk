// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LogtailConfigOutputDetail extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-intranet.log.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstoreName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * test-config
   */
  configName?: string;
  /**
   * @example
   * 1655176807
   */
  createTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  inputDetail?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * file
   */
  inputType?: string;
  /**
   * @example
   * 1655176807
   */
  lastModifyTime?: number;
  /**
   * @example
   * 2022-06-14 11:13:29.796 | DEBUG    | __main__:<module>:1 - hello world
   */
  logSample?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outputDetail?: LogtailConfigOutputDetail;
  /**
   * @remarks
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

