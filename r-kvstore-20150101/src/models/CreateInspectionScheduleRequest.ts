// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInspectionScheduleRequest extends $dara.Model {
  /**
   * @example
   * 0 0 2 * * ?
   */
  cronExpression?: string;
  /**
   * @example
   * RESOURCE_USAGE
   */
  inspectionItems?: string;
  /**
   * @example
   * 1h
   */
  inspectionWindow?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ta-bp11iljddg37xxxx
   */
  instanceId?: string;
  /**
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceIds?: string;
  /**
   * @example
   * zh-CN
   */
  reportLanguage?: string;
  /**
   * @example
   * test-sche
   */
  scheduleName?: string;
  securityToken?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      inspectionItems: 'InspectionItems',
      inspectionWindow: 'InspectionWindow',
      instanceId: 'InstanceId',
      instanceIds: 'InstanceIds',
      reportLanguage: 'ReportLanguage',
      scheduleName: 'ScheduleName',
      securityToken: 'SecurityToken',
      timezone: 'Timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      inspectionItems: 'string',
      inspectionWindow: 'string',
      instanceId: 'string',
      instanceIds: 'string',
      reportLanguage: 'string',
      scheduleName: 'string',
      securityToken: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

