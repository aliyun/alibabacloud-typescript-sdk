// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStorageDomainRoutingRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The route list
   * 
   * This parameter is required.
   */
  routesShrink?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * crsdr-b6thg027zmk1****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      routesShrink: 'Routes',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      routesShrink: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

