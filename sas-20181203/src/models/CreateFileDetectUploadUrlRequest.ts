// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileDetectUploadUrlRequestHashKeyContextList extends $dara.Model {
  /**
   * @remarks
   * The size of the file. Unit: bytes.
   * 
   * @example
   * 2698557
   */
  fileSize?: number;
  /**
   * @remarks
   * The hash value of the file.
   * 
   * @example
   * 30319dd5cee8f894766e479cac170da0
   */
  hashKey?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'FileSize',
      hashKey: 'HashKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      hashKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileDetectUploadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The hash values of files.
   * 
   * > You must specify at least one of the **HashKeyList** and **HashKeyContextList** parameters.
   */
  hashKeyContextList?: CreateFileDetectUploadUrlRequestHashKeyContextList[];
  /**
   * @remarks
   * The identifiers of files. Only MD5 hash values are supported.
   * 
   * > You must specify at least one of the **HashKeyList** and **HashKeyContextList** parameters.
   * 
   * @example
   * CreateFileDetectUploadUrl
   */
  hashKeyList?: string[];
  /**
   * @remarks
   * The type of the file. Valid values:
   * 
   * *   **0**: unknown file
   * *   **1**: binary file
   * *   **2**: webshell file
   * *   **4**: script file
   * 
   * > If you do not know the type of the file, set this parameter to **0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      hashKeyContextList: 'HashKeyContextList',
      hashKeyList: 'HashKeyList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hashKeyContextList: { 'type': 'array', 'itemType': CreateFileDetectUploadUrlRequestHashKeyContextList },
      hashKeyList: { 'type': 'array', 'itemType': 'string' },
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hashKeyContextList)) {
      $dara.Model.validateArray(this.hashKeyContextList);
    }
    if(Array.isArray(this.hashKeyList)) {
      $dara.Model.validateArray(this.hashKeyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

