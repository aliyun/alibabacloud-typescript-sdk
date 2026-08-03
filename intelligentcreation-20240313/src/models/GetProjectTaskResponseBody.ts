// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectTaskResponseBody extends $dara.Model {
  errorMsg?: string;
  requestId?: string;
  status?: string;
  videoDownloadUrl?: string;
  videoDuration?: number;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      status: 'status',
      videoDownloadUrl: 'videoDownloadUrl',
      videoDuration: 'videoDuration',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      requestId: 'string',
      status: 'string',
      videoDownloadUrl: 'string',
      videoDuration: 'number',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

