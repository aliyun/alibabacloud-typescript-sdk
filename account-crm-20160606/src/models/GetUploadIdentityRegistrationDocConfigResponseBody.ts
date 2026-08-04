// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadIdentityRegistrationDocConfigResponseBodyData extends $dara.Model {
  bucketName?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUploadIdentityRegistrationDocConfigResponseBody extends $dara.Model {
  code?: string;
  data?: GetUploadIdentityRegistrationDocConfigResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetUploadIdentityRegistrationDocConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

