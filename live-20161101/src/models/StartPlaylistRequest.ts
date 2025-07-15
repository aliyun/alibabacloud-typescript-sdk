// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartPlaylistRequest extends $dara.Model {
  /**
   * @remarks
   * The offset of the position where the system starts the playback. This parameter takes effect only if the input source is a video file. Unit: milliseconds.
   * 
   * A value greater than 0 indicates an offset from the first frame.
   * 
   * @example
   * 10000
   */
  offset?: number;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the episode list. If the episode list was created by calling the [AddPlaylistItems](https://help.aliyun.com/document_detail/2848078.html) operation, check the value of the response parameter ProgramId to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  programId?: string;
  regionId?: string;
  /**
   * @remarks
   * The method to resume the playback of the episode list. Valid values:
   * 
   * *   **Restart**: resumes the playback from the beginning.
   * *   **Continue**: resumes the playback from the position where the previous playback stops. The **StartItemId** parameter is required only if you set **ResumeMode** to **Custom**.
   * *   **Custom**: resumes the playback from a custom position.
   * 
   * @example
   * Custom
   */
  resumeMode?: string;
  /**
   * @remarks
   * The ID of the first episode to play. This episode is the first to play in carousel playback.
   * 
   * >  This parameter is required only if you set ResumeMode to Custom.
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

