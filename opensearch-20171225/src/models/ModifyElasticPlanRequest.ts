// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyElasticPlanRequest extends $dara.Model {
  customDates?: string[];
  /**
   * @example
   * Updated description
   */
  description?: string;
  /**
   * @example
   * 100
   */
  elasticLcu?: number;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 16
   */
  endHour?: number;
  /**
   * @example
   * WEEK
   */
  scheduleType?: string;
  /**
   * @example
   * 9
   */
  startHour?: number;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      customDates: 'customDates',
      description: 'description',
      elasticLcu: 'elasticLcu',
      enabled: 'enabled',
      endHour: 'endHour',
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
      enabled: 'boolean',
      endHour: 'number',
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

