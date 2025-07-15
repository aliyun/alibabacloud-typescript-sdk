// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DynamicUpdateWaterMarkStreamRuleRequest extends $dara.Model {
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
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * pull.aliyundoc.com
   */
  domain?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The name of the stream that contains the watermark.
   * 
   * This parameter is required.
   * 
   * @example
   * liveStream****
   */
  stream?: string;
  /**
   * @remarks
   * The watermark template ID. You can call the [DescribeLiveStreamWatermarks](https://help.aliyun.com/document_detail/2848102.html) operation to obtain available watermark template IDs.
   * 
   * >  The TemplateId parameter is used to replace the watermark template ID during live streaming.
   * 
   * This parameter is required.
   * 
   * @example
   * 749b7594-86d6-37b1-513b-e1e19845****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      domain: 'Domain',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      stream: 'Stream',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      domain: 'string',
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

