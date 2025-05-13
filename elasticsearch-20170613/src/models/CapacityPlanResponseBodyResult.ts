// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CapacityPlanResponseBodyResultExtendConfigs } from "./CapacityPlanResponseBodyResultExtendConfigs";
import { CapacityPlanResponseBodyResultNodeConfigurations } from "./CapacityPlanResponseBodyResultNodeConfigurations";


export class CapacityPlanResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Extended configuration information.
   */
  extendConfigs?: CapacityPlanResponseBodyResultExtendConfigs[];
  /**
   * @remarks
   * Edition type, with values meaning as follows:
   * 
   * - advanced: Enhanced Edition
   * 
   * - x-pack: Commercial Edition
   * 
   * - community: Community Edition
   * 
   * @example
   * advanced
   */
  instanceCategory?: string;
  /**
   * @remarks
   * Node information.
   */
  nodeConfigurations?: CapacityPlanResponseBodyResultNodeConfigurations[];
  /**
   * @remarks
   * Based on the capacity planning calculation, there is no default value. The meanings of the values are as follows:
   * 
   * - true: Represents an oversized cluster, indicating that the number of data nodes calculated by the capacity planning exceeds the threshold of 50.
   * 
   * - false: The number of data nodes calculated by the capacity planning is within 50.
   * 
   * @example
   * true
   */
  oversizedCluster?: boolean;
  static names(): { [key: string]: string } {
    return {
      extendConfigs: 'ExtendConfigs',
      instanceCategory: 'InstanceCategory',
      nodeConfigurations: 'NodeConfigurations',
      oversizedCluster: 'OversizedCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendConfigs: { 'type': 'array', 'itemType': CapacityPlanResponseBodyResultExtendConfigs },
      instanceCategory: 'string',
      nodeConfigurations: { 'type': 'array', 'itemType': CapacityPlanResponseBodyResultNodeConfigurations },
      oversizedCluster: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.extendConfigs)) {
      $dara.Model.validateArray(this.extendConfigs);
    }
    if(Array.isArray(this.nodeConfigurations)) {
      $dara.Model.validateArray(this.nodeConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

