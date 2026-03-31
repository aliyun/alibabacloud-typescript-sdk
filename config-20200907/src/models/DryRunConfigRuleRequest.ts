// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DryRunConfigRuleRequest extends $dara.Model {
  configurationItem?: string;
  /**
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      configurationItem: 'ConfigurationItem',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurationItem: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

