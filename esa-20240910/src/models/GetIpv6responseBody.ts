// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIPv6ResponseBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether IPv6 is enabled. Valid values:
   * 
   * - **on**: Enabled.
   * 
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The region where IPv6 is enabled. The default value is `x.x`. Valid values:
   * 
   * - `x.x`: Global.
   * 
   * - `cn.cn`: Chinese mainland.
   * 
   * @example
   * x.x
   */
  region?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 156A6B-677B1A-4297B7-9187B7-2B44792
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      region: 'Region',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
      region: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

