// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NASMountConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable encryption in transit. This option is supported only for general-purpose NAS.
   */
  enableTLS?: boolean;
  /**
   * @remarks
   * Specifies the local mount directory.
   * 
   * @example
   * /home/test
   */
  mountDir?: string;
  /**
   * @remarks
   * Specifies the NAS server address.
   * 
   * @example
   * ***-uni85.cn-hangzhou.nas.com:/
   */
  serverAddr?: string;
  static names(): { [key: string]: string } {
    return {
      enableTLS: 'enableTLS',
      mountDir: 'mountDir',
      serverAddr: 'serverAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTLS: 'boolean',
      mountDir: 'string',
      serverAddr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

