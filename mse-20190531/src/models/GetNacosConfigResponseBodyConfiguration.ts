// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNacosConfigResponseBodyConfigurationGrayVersions } from "./GetNacosConfigResponseBodyConfigurationGrayVersions";


export class GetNacosConfigResponseBodyConfiguration extends $dara.Model {
  /**
   * @remarks
   * Application name.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * List of IPs for Beta release.
   * 
   * @example
   * 1.1.XX.XX，2.2.XX.XX
   */
  betaIps?: string;
  /**
   * @remarks
   * Configuration content.
   * 
   * @example
   * log.level=error
   */
  content?: string;
  /**
   * @remarks
   * Configuration ID.
   * 
   * @example
   * log.yaml
   */
  dataId?: string;
  /**
   * @remarks
   * Configuration description.
   * 
   * @example
   * For testing
   */
  desc?: string;
  /**
   * @remarks
   * Encrypted key.
   * 
   * @example
   * key
   */
  encryptedDataKey?: string;
  /**
   * @remarks
   * Current gray version information
   */
  grayVersions?: GetNacosConfigResponseBodyConfigurationGrayVersions[];
  /**
   * @remarks
   * Configuration group name.
   * 
   * @example
   * test
   */
  group?: string;
  /**
   * @remarks
   * Message digest of the configuration.
   * 
   * @example
   * 123rfsdf3
   */
  md5?: string;
  /**
   * @remarks
   * Tags of the configuration.
   * 
   * @example
   * context
   */
  tags?: string;
  /**
   * @remarks
   * Format of the configuration content.
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      betaIps: 'BetaIps',
      content: 'Content',
      dataId: 'DataId',
      desc: 'Desc',
      encryptedDataKey: 'EncryptedDataKey',
      grayVersions: 'GrayVersions',
      group: 'Group',
      md5: 'Md5',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      betaIps: 'string',
      content: 'string',
      dataId: 'string',
      desc: 'string',
      encryptedDataKey: 'string',
      grayVersions: { 'type': 'array', 'itemType': GetNacosConfigResponseBodyConfigurationGrayVersions },
      group: 'string',
      md5: 'string',
      tags: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.grayVersions)) {
      $dara.Model.validateArray(this.grayVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

