// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePostpayUserVpcStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of Cloud Firewall.
   * 
   * @example
   * cfw_elasticity_public_cn-************
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * Valid values:
   * 
   * *   **zh** (default)
   * *   **en**
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The operation type.
   * 
   * *   Set the value to open.
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

