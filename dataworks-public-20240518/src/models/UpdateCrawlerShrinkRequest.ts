// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCrawlerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable AI metadata description. This parameter is supported only when SupportAiComment returned by GetCrawlerTypeCapabilities is set to true. If this parameter is not specified, the existing value remains unchanged.
   */
  enableAiComment?: boolean;
  /**
   * @remarks
   * The ID of the metadata crawler. You can call ListCrawlers to query crawler IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The extension configurations for the crawler type. Only the specified configuration items are updated. Unspecified configuration items remain unchanged. The supported keys and values are determined by the SupportedOptionKeys returned by GetCrawlerTypeCapabilities.
   */
  optionsShrink?: string;
  /**
   * @remarks
   * The ID of the Serverless 2.0 resource group used to run the collection task. Whether this parameter is supported and whether it is required depend on the capabilities returned by GetCrawlerTypeCapabilities. If this parameter is not specified, the existing value remains unchanged.
   * 
   * @example
   * Serverless_res_group_1234567890123456_1234567890
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The scheduling configuration. If this parameter is specified, the scheduling method is updated. If this parameter is not specified, the existing value remains unchanged.
   */
  scheduleConfigShrink?: string;
  /**
   * @remarks
   * The collection scope configuration. If this parameter is specified, the collection scope is updated. If this parameter is not specified, the existing value remains unchanged.
   */
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

