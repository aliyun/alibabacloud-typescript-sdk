// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelProxiesRequest extends $dara.Model {
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
  /**
   * @remarks
   * proxyMode
   * 
   * @example
   * proxyMode
   */
  proxyMode?: string;
  /**
   * @example
   * CREATING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      proxyMode: 'proxyMode',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      proxyMode: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

