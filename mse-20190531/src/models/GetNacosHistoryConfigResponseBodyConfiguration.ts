// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNacosHistoryConfigResponseBodyConfiguration extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The content of the configuration.
   * 
   * @example
   * test
   */
  content?: string;
  /**
   * @remarks
   * The ID of the configuration.
   * 
   * @example
   * test.yaml
   */
  dataId?: string;
  /**
   * @remarks
   * The encryption key.
   * 
   * @example
   * 23fds****
   */
  encryptedDataKey?: string;
  /**
   * @remarks
   * The name of the configuration group.
   * 
   * @example
   * public
   */
  group?: string;
  /**
   * @remarks
   * The MD5 value of the configuration.
   * 
   * @example
   * 23sdf32f****
   */
  md5?: string;
  /**
   * @remarks
   * The configuration type.
   * 
   * @example
   * text
   */
  opType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      content: 'Content',
      dataId: 'DataId',
      encryptedDataKey: 'EncryptedDataKey',
      group: 'Group',
      md5: 'Md5',
      opType: 'OpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      content: 'string',
      dataId: 'string',
      encryptedDataKey: 'string',
      group: 'string',
      md5: 'string',
      opType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

