// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveStreamWatermarkRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
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
  regionId?: string;
  /**
   * @remarks
   * The name of the live stream. The following rules apply:
   * 
   * *   A stream name can be exactly matched. Example: liveStreamA.
   * *   Fuzzy match is also supported. The use of an asterisk (`*`) allows all approximate matches to be found.
   * *   You can place the asterisk before or after an approximate string.
   * 
   * 
   * 
   * >*   Fuzzy match: Only one asterisk (`*`) before or after an approximate string is allowed. The approximate string must be enclosed in `()`. Separate multiple strings with vertical bars (`|`).
   * >*   For example, `*(t1|t2)` matches all streams whose name has the `t1` or `t2` suffix, and `(abc|123)*` matches all streams whose name has the `abc` or `123` prefix.
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
   * >  You can obtain the template ID by checking the value of the TemplateId parameter that is returned by the [AddLiveStreamWatermark](https://help.aliyun.com/document_detail/410759.html) operation.
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

