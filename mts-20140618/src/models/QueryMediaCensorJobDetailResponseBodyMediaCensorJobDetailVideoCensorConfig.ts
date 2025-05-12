// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfigOutputFile } from "./QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfigOutputFile";


export class QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfig extends $dara.Model {
  /**
   * @remarks
   * The custom business type. Default value: common.
   * 
   * @example
   * common
   */
  bizType?: string;
  /**
   * @remarks
   * The information about output snapshots.
   */
  outputFile?: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfigOutputFile;
  /**
   * @remarks
   * Indicates whether the video content needs to be moderated. Default value: **true** Valid values:
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
      outputFile: QueryMediaCensorJobDetailResponseBodyMediaCensorJobDetailVideoCensorConfigOutputFile,
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

