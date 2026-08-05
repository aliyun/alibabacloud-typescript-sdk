// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartPlaylistRequest extends $dara.Model {
  /**
   * @remarks
   * The start offset for the video file. This parameter is valid only for video files. Unit: milliseconds.
   * 
   * A value greater than 0 specifies the start time relative to the first frame.
   * 
   * @example
   * 10000
   */
  offset?: number;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the playlist. If you add items to the playlist by calling the [AddPlaylistItems](https://help.aliyun.com/document_detail/2848078.html) operation, use the value of the ProgramId parameter that is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  programId?: string;
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
   * The restart mode. Valid values:
   * 
   * - **Restart**: Starts from the beginning.
   * 
   * - **Continue**: Resumes playback from where it was stopped. The **StartItemId** parameter is required only when you set the **ResumeMode** parameter to **Custom**.
   * 
   * - **Custom**: Custom start point.
   * 
   * @example
   * Custom
   */
  resumeMode?: string;
  /**
   * @remarks
   * The ID of the item to play first. When the carousel starts, this item is played.
   * 
   * >Notice: 
   * 
   * This parameter is required only when you set **ResumeMode** to **Custom**.
   * 
   * @example
   * asdfasdfasdf****
   */
  startItemId?: string;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      ownerId: 'OwnerId',
      programId: 'ProgramId',
      regionId: 'RegionId',
      resumeMode: 'ResumeMode',
      startItemId: 'StartItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      ownerId: 'number',
      programId: 'string',
      regionId: 'string',
      resumeMode: 'string',
      startItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

