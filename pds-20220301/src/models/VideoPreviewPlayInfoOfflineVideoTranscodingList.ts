// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoPreviewPlayInfoOfflineVideoTranscodingList extends $dara.Model {
  keepOriginalResolution?: boolean;
  status?: string;
  templateId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      keepOriginalResolution: 'keep_original_resolution',
      status: 'status',
      templateId: 'template_id',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keepOriginalResolution: 'boolean',
      status: 'string',
      templateId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

