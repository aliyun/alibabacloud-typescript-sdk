// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppRecommendedCommoditiesRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID of the application instance. This parameter is required in Scenario 1 and is used to filter instance versions.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * {}
   */
  extend?: string;
  /**
   * @remarks
   * The resource filtering conditions.
   * 
   * @example
   * []
   */
  resourceConditions?: string;
  /**
   * @remarks
   * The scenarios. Valid values: ai_chat and inspiration.
   * 
   * @example
   * DataworksManualTask
   */
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      extend: 'Extend',
      resourceConditions: 'ResourceConditions',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      extend: 'string',
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

