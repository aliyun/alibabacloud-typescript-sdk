// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of custom domain names to return.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The pagination start token.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  /**
   * @remarks
   * The domain name prefix.
   * 
   * @example
   * foo
   */
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      nextToken: 'nextToken',
      prefix: 'prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      prefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

