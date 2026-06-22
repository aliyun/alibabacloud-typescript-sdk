// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePostpayUserInternetStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Firewall instance.
   * 
   * @example
   * cfw_elasticity_public_cn-zsk39m******
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The operation type. Currently, only the activation operation is supported.
   * 
   * - open: activation.
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

