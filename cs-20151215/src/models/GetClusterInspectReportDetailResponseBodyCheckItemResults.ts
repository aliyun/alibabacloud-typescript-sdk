// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterInspectReportDetailResponseBodyCheckItemResults extends $dara.Model {
  /**
   * @remarks
   * The category of the inspection item. Valid values:
   * 
   * *   security: Security compliance
   * *   performance: Performance efficiency
   * *   stability: Business stability
   * *   limitation: Service limits
   * *   cost: Cost optimization
   * 
   * @example
   * stability
   */
  category?: string;
  /**
   * @remarks
   * The unique identifier of the inspection item.
   * 
   * @example
   * APIServerClbInstanceStatus
   */
  checkItemUid?: string;
  /**
   * @remarks
   * The description of the inspection item.
   */
  description?: string;
  /**
   * @remarks
   * The fixing suggestion.
   */
  fix?: string;
  /**
   * @remarks
   * The level of the inspection item. Valid values:
   * 
   * *   advice: Suggestions
   * *   warning: Low severity
   * *   error: Medium severity
   * *   critical: High severity
   * 
   * @example
   * critical
   */
  level?: string;
  /**
   * @remarks
   * The name of the inspection item.
   */
  name?: string;
  /**
   * @remarks
   * The inspection results. Valid values:
   * 
   * *   true: The inspection item is abnormal.
   * *   false: The inspection item is normal.
   * *   disable: The inspection item is not enabled.
   * 
   * @example
   * false
   */
  result?: string;
  /**
   * @remarks
   * The resource type of the inspection object.
   * 
   * @example
   * CLB
   */
  targetType?: string;
  /**
   * @remarks
   * The inspection objects.
   */
  targets?: string[];
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      checkItemUid: 'checkItemUid',
      description: 'description',
      fix: 'fix',
      level: 'level',
      name: 'name',
      result: 'result',
      targetType: 'targetType',
      targets: 'targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      checkItemUid: 'string',
      description: 'string',
      fix: 'string',
      level: 'string',
      name: 'string',
      result: 'string',
      targetType: 'string',
      targets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

