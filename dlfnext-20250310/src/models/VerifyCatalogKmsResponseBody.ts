// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCatalogKmsResponseBody extends $dara.Model {
  errorCode?: string;
  hint?: string;
  kmsKeyId?: string;
  serverSideEncryption?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      hint: 'hint',
      kmsKeyId: 'kmsKeyId',
      serverSideEncryption: 'serverSideEncryption',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      hint: 'string',
      kmsKeyId: 'string',
      serverSideEncryption: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

