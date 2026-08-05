// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveStreamWatermarkRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The AppName of the live stream.
   * 
   * This parameter is required.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * The description of the custom rule.
   * 
   * @example
   * my rule
   */
  description?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The name of the custom rule.
   * 
   * This parameter is required.
   * 
   * @example
   * WatermarkRule****
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The stream name. The following rules apply:
   * 
   * - To match a specific stream, enter the full stream name. For example, liveStreamA.
   * 
   * - You can use a wildcard match. The asterisk (`*`) matches all streams.
   * 
   * - You can perform prefix and suffix matching.
   * 
   * > * You can use only one asterisk (`*`). The asterisk must be at the beginning or end of the string. The matching items must be enclosed in parentheses (`()`) and separated by a vertical bar (`|`).
   * >
   * > * For example, `*(t1|t2)` matches all streams that end with `t1` or `t2`. `(abc|123)*` matches all streams that start with `abc` or `123`.
   * 
   * This parameter is required.
   * 
   * @example
   * liveStreamA
   */
  stream?: string;
  /**
   * @remarks
   * The ID of the watermark template.
   * 
   * > Get the template ID from the response of the [AddLiveStreamWatermark](https://help.aliyun.com/document_detail/2848096.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      description: 'Description',
      domain: 'Domain',
      name: 'Name',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      stream: 'Stream',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      description: 'string',
      domain: 'string',
      name: 'string',
      ownerId: 'number',
      regionId: 'string',
      stream: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

