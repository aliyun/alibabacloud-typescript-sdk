// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The timestamp that indicates when the pair of static username and password that you want to delete was created. Unit: milliseconds.
   * 
   * You can call the [ListAccounts](https://help.aliyun.com/document_detail/472730.html) operation to view the timestamp.
   * 
   * @example
   * 1671175303522
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The pair of username and password that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * MjphbXFwLWNuLXVxbTJ5cjc3djAwMzpMVEFJNXQ4YmVNbVZNMWVSWnRFSjZ2Zm1=
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

