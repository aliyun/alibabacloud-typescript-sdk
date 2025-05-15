// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAccountFactoryBaselineRequestBaselineItems } from "./CreateAccountFactoryBaselineRequestBaselineItems";


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

