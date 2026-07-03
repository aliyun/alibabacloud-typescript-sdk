// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecretsRequest extends $dara.Model {
  /**
   * @remarks
   * The gateway type used to filter results. Valid values: **AI** and **API**.
   * 
   * @example
   * AI
   */
  gatewayType?: string;
  /**
   * @remarks
   * The key name. Fuzzy match is supported.
   * 
   * @example
   * my_secret
   */
  nameLike?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayType: 'gatewayType',
      nameLike: 'nameLike',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayType: 'string',
      nameLike: 'string',
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

