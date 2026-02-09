// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSslCertsRequest extends $dara.Model {
  /**
   * @remarks
   * The name keyword for matching.
   * 
   * @example
   * ali
   */
  certNameLike?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * fun.iot.evideocloud.com.cn
   */
  domainName?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      certNameLike: 'certNameLike',
      domainName: 'domainName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certNameLike: 'string',
      domainName: 'string',
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

