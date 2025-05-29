// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublicKeysResponseBodyPublicKeys extends $dara.Model {
  /**
   * @example
   * verify_30d89ccb0905c8c7882c1d14a991954b
   */
  content?: string;
  description?: string;
  /**
   * @example
   * mygroup
   */
  keyGroup?: string;
  /**
   * @example
   * mykey
   */
  keyName?: string;
  keyType?: string;
  /**
   * @example
   * 2024-06-11T14:26:48+08:00
   */
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      keyGroup: 'KeyGroup',
      keyName: 'KeyName',
      keyType: 'KeyType',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      keyGroup: 'string',
      keyName: 'string',
      keyType: 'string',
      uploadTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

