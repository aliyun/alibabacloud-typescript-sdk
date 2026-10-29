// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKeyPairsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the key pair.
   * 
   * @example
   * ssh-50cynkq42sgj4ej1tn78t4***
   */
  keyPairId?: string;
  /**
   * @remarks
   * The name of the key pair. The name must be 2 to 128 characters in length and can contain letters and Chinese characters. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. It can contain the following characters:
   * - Digits
   * - :
   * - _
   * - .
   * 
   * Only a single name is supported. By default, information about all key pairs is queried.
   * 
   * @example
   * TestKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The page number. Valid values: integers greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The paging Settings for the number of entries per page in a paged query. Valid values: integers greater than 0. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairId: 'KeyPairId',
      keyPairName: 'KeyPairName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairId: 'string',
      keyPairName: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

