// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RuntimeToken extends $dara.Model {
  /**
   * @example
   * TEST
   */
  env?: string;
  /**
   * @example
   * 2
   */
  pbcId?: number;
  /**
   * @example
   * yunmall-item
   */
  pbcName?: string;
  /**
   * @example
   * 1
   */
  serviceId?: number;
  /**
   * @example
   * yunmall-item
   */
  serviceName?: string;
  /**
   * @example
   * dfsdf
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'env',
      pbcId: 'pbcId',
      pbcName: 'pbcName',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      pbcId: 'number',
      pbcName: 'string',
      serviceId: 'number',
      serviceName: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

