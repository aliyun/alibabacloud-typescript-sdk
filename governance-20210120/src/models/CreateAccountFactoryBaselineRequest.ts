// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccountFactoryBaselineRequestBaselineItems extends $dara.Model {
  /**
   * @remarks
   * The configurations of the baseline item. The value of this parameter is a JSON string.
   * 
   * @example
   * {\\"EnabledServices\\":[\\"CEN_TR\\",\\"CDT\\",\\"CMS\\",\\"KMS\\"]}
   */
  config?: string;
  /**
   * @remarks
   * The name of the baseline item.
   * 
   * @example
   * ACS-BP_ACCOUNT_FACTORY_VPC
   */
  name?: string;
  /**
   * @remarks
   * The version of the baseline item.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccountFactoryBaselineRequest extends $dara.Model {
  /**
   * @remarks
   * An array that contains the baseline items.
   * 
   * You can call the [ListAccountFactoryBaselineItems](~~ListAccountFactoryBaselineItems~~) operation to query a list of baseline items supported by the account factory in Cloud Governance Center.
   */
  baselineItems?: CreateAccountFactoryBaselineRequestBaselineItems[];
  /**
   * @remarks
   * The name of the baseline.
   * 
   * @example
   * Default
   */
  baselineName?: string;
  /**
   * @remarks
   * The description of the baseline.
   * 
   * @example
   * Default Baseline.
   */
  description?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      baselineItems: 'BaselineItems',
      baselineName: 'BaselineName',
      description: 'Description',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineItems: { 'type': 'array', 'itemType': CreateAccountFactoryBaselineRequestBaselineItems },
      baselineName: 'string',
      description: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.baselineItems)) {
      $dara.Model.validateArray(this.baselineItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

