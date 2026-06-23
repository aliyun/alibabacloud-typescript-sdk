// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The timestamp that indicates when the static username and password were created. Unit: milliseconds.
   * 
   * Call the [ListAccounts](https://help.aliyun.com/document_detail/472730.html) operation to find this value.
   * 
   * @example
   * 1671175303522
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The static username to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * MjphbXFwLWNuLXVxbTJ6cjc2djAwMzpMVEFJNX*******ZNMWVSWnRFSjZ2Zm8=
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'CreateTimestamp',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

