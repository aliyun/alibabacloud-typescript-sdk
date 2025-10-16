// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostpayUserInternetStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of Cloud Firewall.
   * 
   * @example
   * cfw_elasticity_public_cn-zsk39m******
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh** (default)
   * *   **en**
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

