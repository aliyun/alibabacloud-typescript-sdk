// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAliasesByKeyIdRequest extends $dara.Model {
  /**
   * @remarks
   * The globally unique ID of the CMK.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Valid values: an integer that is greater than 0.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 0 to 101.
   * 
   * Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
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

