// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAccountFactoryBaselineRequestBaselineItems extends $dara.Model {
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

export class UpdateAccountFactoryBaselineRequest extends $dara.Model {
  /**
   * @remarks
   * The baseline ID.
   * 
   * @example
   * afb-bp1pq3emlkt27vsj****
   */
  baselineId?: string;
  /**
   * @remarks
   * The baseline items.
   * 
   * You can call the [ListAccountFactoryBaselineItems](~~ListAccountFactoryBaselineItems~~) operation to query a list of baseline items supported by the account factory in Cloud Governance Center.
   */
  baselineItems?: UpdateAccountFactoryBaselineRequestBaselineItems[];
  /**
   * @remarks
   * The name of the baseline.
   */
  baselineName?: string;
  /**
   * @remarks
   * The description of the baseline.
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
      baselineId: 'BaselineId',
      baselineItems: 'BaselineItems',
      baselineName: 'BaselineName',
      description: 'Description',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'string',
      baselineItems: { 'type': 'array', 'itemType': UpdateAccountFactoryBaselineRequestBaselineItems },
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

