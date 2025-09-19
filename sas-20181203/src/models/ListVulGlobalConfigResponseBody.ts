// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVulGlobalConfigResponseBodyVulGlobalConfigList extends $dara.Model {
  /**
   * @remarks
   * The key of the configuration item.
   * 
   * @example
   * vul_scan_ip_list
   */
  configKey?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * 127.0.*.*,127.0.*.*
   */
  configValue?: string;
  static names(): { [key: string]: string } {
    return {
      configKey: 'ConfigKey',
      configValue: 'ConfigValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
      configValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVulGlobalConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92719F
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations.
   */
  vulGlobalConfigList?: ListVulGlobalConfigResponseBodyVulGlobalConfigList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vulGlobalConfigList: 'VulGlobalConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vulGlobalConfigList: { 'type': 'array', 'itemType': ListVulGlobalConfigResponseBodyVulGlobalConfigList },
    };
  }

  validate() {
    if(Array.isArray(this.vulGlobalConfigList)) {
      $dara.Model.validateArray(this.vulGlobalConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

