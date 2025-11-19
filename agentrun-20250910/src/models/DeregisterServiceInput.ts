// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeregisterServiceInput extends $dara.Model {
  /**
   * @remarks
   * 要注销的服务名称（UUID格式）
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-1234-1234-123456789abc
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

