// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOpenIpAccessSrcStatRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @example
   * 47.100.102.XXX
   */
  dstIp?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
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

