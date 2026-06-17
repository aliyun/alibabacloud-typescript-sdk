// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCfwInstanceRequestUpdateList extends $dara.Model {
  /**
   * @remarks
   * The code of the instance property to update.
   * The following codes are supported:
   * 
   * - \\`Code\\`: \\`MajorVersion\\`. Set \\`Value\\` to \\`2\\`. This is available only for pay-as-you-go 1.0 users to upgrade their instances to pay-as-you-go 2.0.
   * 
   *   >Warning: 
   * 
   *   Make sure you understand the billing methods and pricing of pay-as-you-go 2.0.
   * 
   *   
   * 
   *   >Warning: 
   * 
   *   Note that if log delivery is enabled before the upgrade, it will remain enabled after the upgrade, and logs will be delivered to a new Logstore.
   * 
   *   
   * 
   * - \\`Code\\`: \\`ThreatIntelligence\\`. This is available only for pay-as-you-go 2.0 users to enable or disable the threat intelligence feature. Set \\`Value\\` to \\`1\\` to enable the feature or \\`0\\` to disable it.
   * 
   * - \\`Code\\`: \\`Sdl\\`. This is available only for pay-as-you-go 2.0 users to enable or disable the sensitive data leak detection feature. Set \\`Value\\` to \\`1\\` to enable the feature or \\`0\\` to disable it.
   * 
   * @example
   * Sdl
   */
  code?: string;
  /**
   * @remarks
   * The value for the specified \\`Code\\`. For valid values, see the description of the \\`Code\\` parameter.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCfwInstanceRequest extends $dara.Model {
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
   * A list of instance properties to update.
   */
  updateList?: ModifyCfwInstanceRequestUpdateList[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      updateList: 'UpdateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      updateList: { 'type': 'array', 'itemType': ModifyCfwInstanceRequestUpdateList },
    };
  }

  validate() {
    if(Array.isArray(this.updateList)) {
      $dara.Model.validateArray(this.updateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

