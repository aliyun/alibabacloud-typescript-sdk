// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAICPublicKeysRequest extends $dara.Model {
  /**
   * @remarks
   * Public key grouping
   * 
   * @example
   * g-test
   */
  keyGroup?: string;
  /**
   * @remarks
   * Public key name
   * 
   * @example
   * mykey
   */
  keyName?: string;
  /**
   * @remarks
   * Public key type
   * 
   * @example
   * adb
   */
  keyType?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
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

