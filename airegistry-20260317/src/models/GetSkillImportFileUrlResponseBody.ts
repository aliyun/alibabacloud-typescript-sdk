// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillImportFileUrlResponseBodyData extends $dara.Model {
  contentType?: string;
  maxSize?: string;
  ossObjectName?: string;
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      maxSize: 'MaxSize',
      ossObjectName: 'OssObjectName',
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      maxSize: 'string',
      ossObjectName: 'string',
      uploadUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSkillImportFileUrlResponseBody extends $dara.Model {
  data?: GetSkillImportFileUrlResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSkillImportFileUrlResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

