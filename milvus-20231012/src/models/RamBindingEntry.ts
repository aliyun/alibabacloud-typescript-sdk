// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RamBindingEntry extends $dara.Model {
  /**
   * @remarks
   * The unique identifier (UID) of the bound RAM user.
   * 
   * @example
   * 1234567890123456
   */
  boundUid?: string;
  /**
   * @remarks
   * The bound RAM username.
   * 
   * @example
   * test-user
   */
  boundUserName?: string;
  /**
   * @remarks
   * The Milvus username.
   * 
   * @example
   * root
   */
  milvusUsername?: string;
  static names(): { [key: string]: string } {
    return {
      boundUid: 'boundUid',
      boundUserName: 'boundUserName',
      milvusUsername: 'milvusUsername',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundUid: 'string',
      boundUserName: 'string',
      milvusUsername: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

