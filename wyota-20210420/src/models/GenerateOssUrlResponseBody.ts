// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateOssUrlResponseBodyData extends $dara.Model {
  downloadUrl?: string;
  objectName?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      objectName: 'ObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      objectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateOssUrlResponseBody extends $dara.Model {
  data?: GenerateOssUrlResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GenerateOssUrlResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

