// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   transcode
   * *   snapshot
   * *   ai
   * 
   * This parameter is required.
   * 
   * @example
   * transcode
   */
  jobType?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * This parameter is required.
   * 
   * @example
   * 30e5d7**********bd900764de7c0102
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      jobType: 'JobType',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobType: 'string',
      mediaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

