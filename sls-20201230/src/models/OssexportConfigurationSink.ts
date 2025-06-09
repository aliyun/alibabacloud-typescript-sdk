// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OSSExportConfigurationSink extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-bucket
   */
  bucket?: string;
  /**
   * @example
   * 300
   */
  bufferInterval?: number;
  /**
   * @example
   * 256
   */
  bufferSize?: number;
  /**
   * @example
   * snappy
   */
  compressionType?: string;
  contentDetail?: { [key: string]: any };
  /**
   * @example
   * json
   */
  contentType?: string;
  /**
   * @example
   * 900
   * 
   * @deprecated
   */
  delaySec?: number;
  /**
   * @example
   * 900
   */
  delaySeconds?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://oss-cn-hangzhou-internal.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * %Y/%m/%d/%H/%M
   */
  pathFormat?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * time
   */
  pathFormatType?: string;
  /**
   * @example
   * demo/
   */
  prefix?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ram::123456789:role/aliyunlogdefaultrole
   */
  roleArn?: string;
  /**
   * @example
   * .json
   */
  suffix?: string;
  /**
   * @example
   * +0800
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      bufferInterval: 'bufferInterval',
      bufferSize: 'bufferSize',
      compressionType: 'compressionType',
      contentDetail: 'contentDetail',
      contentType: 'contentType',
      delaySec: 'delaySec',
      delaySeconds: 'delaySeconds',
      endpoint: 'endpoint',
      pathFormat: 'pathFormat',
      pathFormatType: 'pathFormatType',
      prefix: 'prefix',
      roleArn: 'roleArn',
      suffix: 'suffix',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      bufferInterval: 'number',
      bufferSize: 'number',
      compressionType: 'string',
      contentDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      contentType: 'string',
      delaySec: 'number',
      delaySeconds: 'number',
      endpoint: 'string',
      pathFormat: 'string',
      pathFormatType: 'string',
      prefix: 'string',
      roleArn: 'string',
      suffix: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    if(this.contentDetail) {
      $dara.Model.validateMap(this.contentDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

