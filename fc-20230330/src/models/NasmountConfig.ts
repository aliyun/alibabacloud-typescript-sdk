// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NASMountConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use the Transport Layer Security (TLS) protocol to secure data transmission. Note: Only General-purpose NAS supports transmission encryption.
   * 
   * @example
   * true
   */
  enableTLS?: boolean;
  /**
   * @remarks
   * The local mount directory.
   * 
   * @example
   * /home/test
   */
  mountDir?: string;
  /**
   * @remarks
   * The address of a NAS server.
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

