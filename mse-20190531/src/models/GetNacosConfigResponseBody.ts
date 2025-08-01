// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNacosConfigResponseBodyConfigurationGrayVersions extends $dara.Model {
  /**
   * @remarks
   * Gray version name
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The priority of the current gray rule.
   * 
   * @example
   * 20
   */
  priority?: number;
  /**
   * @remarks
   * Rules of the current gray version
   * 
   * @example
   * a=b
   */
  rule?: string;
  /**
   * @remarks
   * Gray type
   * 
   * @example
   * Beta
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      priority: 'Priority',
      rule: 'Rule',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      priority: 'number',
      rule: 'string',
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

export class GetNacosConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Configuration information.
   */
  configuration?: GetNacosConfigResponseBodyConfiguration;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * Message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * B4EAB48C-BB4B-5B8D-B33B-35D69606C5AD
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request, with values as follows:
   * - `true`: The request was successful.
   * - `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: GetNacosConfigResponseBodyConfiguration,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

