// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublicKeysRequest extends $dara.Model {
  /**
   * @example
   * g-test
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
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyGroup: 'KeyGroup',
      keyName: 'KeyName',
      keyType: 'KeyType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyGroup: 'string',
      keyName: 'string',
      keyType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

