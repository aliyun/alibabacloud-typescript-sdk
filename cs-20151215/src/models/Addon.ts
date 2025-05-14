// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Addon extends $dara.Model {
  /**
   * @example
   * {\"IngressSlbNetworkType\":\"internet\"}
   */
  config?: string;
  /**
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @example
   * nginx-ingress-controller
   */
  name?: string;
  /**
   * @example
   * v1.9.3-aliyun.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      disabled: 'disabled',
      name: 'name',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      disabled: 'boolean',
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

