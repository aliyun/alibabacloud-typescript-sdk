// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceEndpointResponseBodyDomains extends $dara.Model {
  /**
   * @remarks
   * The domain name that is used to access the Container Registry Enterprise Edition instance.
   * 
   * @example
   * shanghai-instance1-registry.cn-shanghai.cr.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   `SYSTEM`: a system domain name.
   * *   `USER`: a user domain name.
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

