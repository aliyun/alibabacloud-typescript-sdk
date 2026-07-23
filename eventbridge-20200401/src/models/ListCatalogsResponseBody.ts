// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Catalog } from "./Catalog";


export class ListCatalogsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Catalog list
   */
  catalogs?: Catalog[];
  /**
   * @remarks
   * Next page token
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      catalogs: 'Catalogs',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogs: { 'type': 'array', 'itemType': Catalog },
      nextToken: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.catalogs)) {
      $dara.Model.validateArray(this.catalogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCatalogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code, 200 indicates success
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Response data
   */
  data?: ListCatalogsResponseBodyData;
  /**
   * @remarks
   * Response message
   * 
   * @example
   * Operation success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation was successful
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListCatalogsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

