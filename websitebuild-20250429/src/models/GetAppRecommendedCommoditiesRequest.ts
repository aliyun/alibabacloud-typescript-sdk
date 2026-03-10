// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppRecommendedCommoditiesRequest extends $dara.Model {
  /**
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  resourceConditions?: string;
  /**
   * @example
   * DataworksManualTask
   */
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      resourceConditions: 'ResourceConditions',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      resourceConditions: 'string',
      scene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

