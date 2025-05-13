// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceIndicesRequest extends $dara.Model {
  /**
   * @remarks
   * false
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * 15
   * 
   * @example
   * false
   */
  isManaged?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * false
   */
  isOpenstore?: boolean;
  /**
   * @remarks
   * 1
   * 
   * @example
   * log-0001
   */
  name?: string;
  /**
   * @remarks
   * The header of the response.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The total size of the index in Cloud Hosting. Unit: bytes.
   * 
   * @example
   * 15
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      isManaged: 'isManaged',
      isOpenstore: 'isOpenstore',
      name: 'name',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      isManaged: 'boolean',
      isOpenstore: 'boolean',
      name: 'string',
      page: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

