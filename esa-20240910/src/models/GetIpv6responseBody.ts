// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIPv6ResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether IPv6 is enabled. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  enable?: string;
  region?: string;
  /**
   * @remarks
   * The request ID.
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

