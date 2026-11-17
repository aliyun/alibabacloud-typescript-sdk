// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpenIpAccessSrcStatRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 47.100.102.XXX
   */
  dstIp?: string;
  /**
   * @remarks
   * The language type.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 47.100.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dstIp: 'DstIp',
      lang: 'Lang',
      pageSize: 'PageSize',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      dstIp: 'string',
      lang: 'string',
      pageSize: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

