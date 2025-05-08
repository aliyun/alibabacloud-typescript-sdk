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
   * The name of the key pair that you want to bind to the simple application server. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with `http://` or `https://`. The name can contain the following characters:
   * 
   * *   Numbers.
   * *   :
   * *   _
   * *   .
   * 
   * You can specify only one name. By default, all key pairs are queried.
   * 
   * @example
   * TestKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The page number of the returned page. Valid values: integers that are greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: integers that are greater than 0. Default value: 10.
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

