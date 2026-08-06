// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCrawlerShrinkRequest extends $dara.Model {
  enableAiComment?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  optionsShrink?: string;
  /**
   * @example
   * Serverless_res_group_1234567890123456_1234567890
   */
  resourceGroupId?: string;
  scheduleConfigShrink?: string;
  scopeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      enableAiComment: 'EnableAiComment',
      id: 'Id',
      optionsShrink: 'Options',
      resourceGroupId: 'ResourceGroupId',
      scheduleConfigShrink: 'ScheduleConfig',
      scopeShrink: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAiComment: 'boolean',
      id: 'number',
      optionsShrink: 'string',
      resourceGroupId: 'string',
      scheduleConfigShrink: 'string',
      scopeShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

