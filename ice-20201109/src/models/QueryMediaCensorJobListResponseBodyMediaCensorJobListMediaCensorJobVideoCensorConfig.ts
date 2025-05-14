// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfigOutputFile } from "./QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfigOutputFile";


export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfig extends $dara.Model {
  /**
   * @remarks
   * The moderation template. Default value: common. The default value indicates that the default template is used.
   * 
   * >  If the moderation template is not specified, the default value common is returned. If a custom moderation template that is created by submitting a ticket is specified, the UID of the template is returned.
   * 
   * @example
   * common
   */
  bizType?: string;
  /**
   * @remarks
   * The information about output snapshots.
   */
  outputFile?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfigOutputFile;
  /**
   * @remarks
   * Indicates whether the video content needs to be moderated. Default value: **true**. Valid values:
   * 
   * *   **true**: The video content needs to be moderated.
   * *   **false**: The video content does not need to be moderated.
   * 
   * @example
   * true
   */
  videoCensor?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      outputFile: 'OutputFile',
      videoCensor: 'VideoCensor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      outputFile: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfigOutputFile,
      videoCensor: 'string',
    };
  }

  validate() {
    if(this.outputFile && typeof (this.outputFile as any).validate === 'function') {
      (this.outputFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

