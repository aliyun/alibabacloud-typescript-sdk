// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStorageDomainRoutingRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  routesShrink?: string;
  /**
   * @remarks
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

