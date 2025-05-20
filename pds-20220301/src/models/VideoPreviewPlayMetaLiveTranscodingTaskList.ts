// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoPreviewPlayMetaLiveTranscodingTaskList extends $dara.Model {
  /**
   * @example
   * true
   */
  keepOriginalResolution?: boolean;
  /**
   * @example
   * finished
   */
  status?: string;
  /**
   * @example
   * 264_720p
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      keepOriginalResolution: 'keep_original_resolution',
      status: 'status',
      templateId: 'template_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepOriginalResolution: 'boolean',
      status: 'string',
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

