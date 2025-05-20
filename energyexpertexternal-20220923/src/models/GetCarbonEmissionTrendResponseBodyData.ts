// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCarbonEmissionTrendResponseBodyDataActualEmissionList } from "./GetCarbonEmissionTrendResponseBodyDataActualEmissionList";
import { GetCarbonEmissionTrendResponseBodyDataTargetEmissionList } from "./GetCarbonEmissionTrendResponseBodyDataTargetEmissionList";


export class GetCarbonEmissionTrendResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Actual emission list.
   */
  actualEmissionList?: GetCarbonEmissionTrendResponseBodyDataActualEmissionList[];
  /**
   * @remarks
   * Target Emission List.
   */
  targetEmissionList?: GetCarbonEmissionTrendResponseBodyDataTargetEmissionList[];
  static names(): { [key: string]: string } {
    return {
      actualEmissionList: 'actualEmissionList',
      targetEmissionList: 'targetEmissionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualEmissionList: { 'type': 'array', 'itemType': GetCarbonEmissionTrendResponseBodyDataActualEmissionList },
      targetEmissionList: { 'type': 'array', 'itemType': GetCarbonEmissionTrendResponseBodyDataTargetEmissionList },
    };
  }

  validate() {
    if(Array.isArray(this.actualEmissionList)) {
      $dara.Model.validateArray(this.actualEmissionList);
    }
    if(Array.isArray(this.targetEmissionList)) {
      $dara.Model.validateArray(this.targetEmissionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

