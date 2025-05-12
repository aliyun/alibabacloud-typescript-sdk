// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceEndpointResponseBodyEndpointsDomains extends $dara.Model {
  /**
   * @remarks
   * The domain name of the Container Registry instance.
   * 
   * @example
   * t****-registry.cn-shanghai.cr.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   SYSTEM: system domain name.
   * *   USER: user domain name.
   * 
   * @example
   * SYSTEM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
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

