// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBucketsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of returned buckets. You can leave this parameter empty. The default value is 10. The value cannot be greater than 100.
   * 
   * @example
   * 5
   */
  pageSize?: string;
  /**
   * @remarks
   * The prefix that returned bucket names must contain. If this parameter is not specified, prefix information will not be used as a filter.
   * 
   * @example
   * image
   */
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
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

