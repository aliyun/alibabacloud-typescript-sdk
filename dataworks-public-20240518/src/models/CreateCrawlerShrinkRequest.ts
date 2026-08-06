// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCrawlerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  dataSourceId?: number;
  enableAiComment?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example_crawler
   */
  name?: string;
  optionsShrink?: string;
  /**
   * @example
   * Serverless_res_group_1234567890123456_1234567890
   */
  resourceGroupId?: string;
  scheduleConfigShrink?: string;
  scopeShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * starrocks
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      enableAiComment: 'EnableAiComment',
      name: 'Name',
      optionsShrink: 'Options',
      resourceGroupId: 'ResourceGroupId',
      scheduleConfigShrink: 'ScheduleConfig',
      scopeShrink: 'Scope',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'number',
      enableAiComment: 'boolean',
      name: 'string',
      optionsShrink: 'string',
      resourceGroupId: 'string',
      scheduleConfigShrink: 'string',
      scopeShrink: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

