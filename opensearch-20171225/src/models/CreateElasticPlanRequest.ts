// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateElasticPlanRequest extends $dara.Model {
  customDates?: string[];
  /**
   * @example
   * my elastic plan
   */
  description?: string;
  /**
   * @example
   * 100
   */
  elasticLcu?: number;
  /**
   * @example
   * 13
   */
  endHour?: number;
  /**
   * @example
   * elastic_plan_name
   */
  name?: string;
  /**
   * @example
   * WEEK
   */
  scheduleType?: string;
  /**
   * @example
   * 0
   */
  startHour?: number;
  /**
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      customDates: 'customDates',
      description: 'description',
      elasticLcu: 'elasticLcu',
      endHour: 'endHour',
      name: 'name',
      scheduleType: 'scheduleType',
      startHour: 'startHour',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDates: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      elasticLcu: 'number',
      endHour: 'number',
      name: 'string',
      scheduleType: 'string',
      startHour: 'number',
      dryRun: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.customDates)) {
      $dara.Model.validateArray(this.customDates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

