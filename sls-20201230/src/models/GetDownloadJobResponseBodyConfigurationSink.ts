// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDownloadJobResponseBodyConfigurationSink extends $dara.Model {
  /**
   * @remarks
   * 对象存储桶
   * 
   * @example
   * ali-test-oss-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * 压缩格式
   * 
   * @example
   * none
   */
  compressionType?: string;
  /**
   * @remarks
   * 下载文件格式
   * 
   * @example
   * csv
   */
  contentType?: string;
  /**
   * @example
   * download/
   */
  prefix?: string;
  /**
   * @remarks
   * 下载使用roleArn
   * 
   * @example
   * acs:ram::0123456789:role/aliyunlogdefaultrole
   */
  roleArn?: string;
  /**
   * @example
   * AliyunOSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      compressionType: 'compressionType',
      contentType: 'contentType',
      prefix: 'prefix',
      roleArn: 'roleArn',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      compressionType: 'string',
      contentType: 'string',
      prefix: 'string',
      roleArn: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

