// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKMSServiceKeyResponseBodyKmsKeyInfoList extends $dara.Model {
  arn?: string;
  creationDate?: string;
  creator?: string;
  deleteDate?: string;
  description?: string;
  keyId?: string;
  keyState?: string;
  keyUsage?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      creationDate: 'CreationDate',
      creator: 'Creator',
      deleteDate: 'DeleteDate',
      description: 'Description',
      keyId: 'KeyId',
      keyState: 'KeyState',
      keyUsage: 'KeyUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      creationDate: 'string',
      creator: 'string',
      deleteDate: 'string',
      description: 'string',
      keyId: 'string',
      keyState: 'string',
      keyUsage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKMSServiceKeyResponseBody extends $dara.Model {
  kmsKeyInfoList?: GetKMSServiceKeyResponseBodyKmsKeyInfoList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      kmsKeyInfoList: 'KmsKeyInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsKeyInfoList: { 'type': 'array', 'itemType': GetKMSServiceKeyResponseBodyKmsKeyInfoList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.kmsKeyInfoList)) {
      $dara.Model.validateArray(this.kmsKeyInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

