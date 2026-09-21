// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCompressFileDetectResultRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paging query. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The unique identifier of the file. This parameter is required in practice. If this parameter is not specified, the API returns ServerError (500). The value must be the MD5 or SHA-256 hash of the file.
   * 
   * @example
   * 0a212417e65c26ff133cfff28f6c****
   */
  hashKey?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query. Default value: 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 27.9.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hashKey: 'HashKey',
      pageSize: 'PageSize',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hashKey: 'string',
      pageSize: 'number',
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

