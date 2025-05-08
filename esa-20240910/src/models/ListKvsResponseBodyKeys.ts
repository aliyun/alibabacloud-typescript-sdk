// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKvsResponseBodyKeys extends $dara.Model {
  /**
   * @remarks
   * The key name.
   * 
   * @example
   * Key1
   */
  name?: string;
  /**
   * @remarks
   * The time when the key was last updated.
   * 
   * @example
   * 2021-12-13T07:46:03Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

