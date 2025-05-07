// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OssUploadCredential extends $dara.Model {
  accessKeyId?: string;
  endpoint?: string;
  filePath?: string;
  ossPolicy?: string;
  ossSignature?: string;
  stsToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      endpoint: 'Endpoint',
      filePath: 'FilePath',
      ossPolicy: 'OssPolicy',
      ossSignature: 'OssSignature',
      stsToken: 'StsToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      endpoint: 'string',
      filePath: 'string',
      ossPolicy: 'string',
      ossSignature: 'string',
      stsToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

