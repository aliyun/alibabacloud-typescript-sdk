// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePostpayUserVpcStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Firewall instance.
   * 
   * @example
   * cfw_elasticity_public_cn-************
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the request and response.
   * 
   * Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - en: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The operation to perform. Currently, only the open operation is supported.
   * 
   * - open: Enables the VPC border firewall.
   * 
   * @example
   * open
   */
  operate?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      operate: 'Operate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      operate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

