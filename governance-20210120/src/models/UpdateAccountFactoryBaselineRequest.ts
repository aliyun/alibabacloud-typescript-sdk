// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAccountFactoryBaselineRequestBaselineItems } from "./UpdateAccountFactoryBaselineRequestBaselineItems";


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

