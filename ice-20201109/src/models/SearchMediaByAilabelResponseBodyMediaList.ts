// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchMediaByAILabelResponseBodyMediaListAiData } from "./SearchMediaByAilabelResponseBodyMediaListAiData";


export class SearchMediaByAILabelResponseBodyMediaList extends $dara.Model {
  /**
   * @remarks
   * The details of the AI job.
   */
  aiData?: SearchMediaByAILabelResponseBodyMediaListAiData;
  /**
   * @remarks
   * The ID of the application. Default value: app-1000000.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The URL of the thumbnail.
   * 
   * @example
   * http://example.aliyundoc.com/snapshot/****.jpg?auth_key=1498476426-0-0-f00b9455c49a423ce69cf4e27333****
   */
  coverUrl?: string;
  /**
   * @remarks
   * The time when the media asset was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-14T09:15:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the media asset.
   */
  description?: string;
  /**
   * @remarks
   * The duration. Unit: seconds.
   * 
   * @example
   * 12.2
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 1c6ce34007d571ed94667630a6bc****
   */
  mediaId?: string;
  /**
   * @remarks
   * The time when the media asset was updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-14T09:15:50Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The size of the source file. Unit: bytes.
   * 
   * @example
   * 10897890
   */
  size?: number;
  /**
   * @remarks
   * The array of video snapshot URLs.
   */
  snapshots?: string[];
  /**
   * @remarks
   * The status of the video.
   * 
   * Valid values:
   * 
   * *   PrepareFail
   * *   UploadFail
   * *   Init
   * *   UploadSucc
   * *   Transcoding
   * *   TranscodeFail
   * *   Deleted
   * *   Normal
   * *   Uploading
   * *   Preparing
   * *   Blocked
   * *   Checking
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The storage address.
   * 
   * @example
   * out-****.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags of the media asset.
   */
  tags?: string;
  /**
   * @remarks
   * The title of the media asset.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      aiData: 'AiData',
      appId: 'AppId',
      coverUrl: 'CoverUrl',
      creationTime: 'CreationTime',
      description: 'Description',
      duration: 'Duration',
      mediaId: 'MediaId',
      modificationTime: 'ModificationTime',
      size: 'Size',
      snapshots: 'Snapshots',
      status: 'Status',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiData: SearchMediaByAILabelResponseBodyMediaListAiData,
      appId: 'string',
      coverUrl: 'string',
      creationTime: 'string',
      description: 'string',
      duration: 'number',
      mediaId: 'string',
      modificationTime: 'string',
      size: 'number',
      snapshots: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.aiData && typeof (this.aiData as any).validate === 'function') {
      (this.aiData as any).validate();
    }
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

