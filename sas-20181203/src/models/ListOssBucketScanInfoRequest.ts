// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOssBucketScanInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * iboxpublic****
   */
  bucketName?: string;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The bucket name for fuzzy match.
   * 
   * @example
   * test
   */
  fuzzBucketName?: string;
  /**
   * @remarks
   * Specifies whether risky files are detected. Valid values:
   * 
   * - **0**: No risks detected.
   * - **1**: Risky files exist.
   * 
   * @example
   * 1
   */
  hasRisk?: number;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paging query.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The detection status. Valid values:
   * 
   * - **1**: Not scanned.
   * - **2**: Full scan in progress.
   * - **3**: Incremental scan in progress.
   * - **4**: Scanned.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      currentPage: 'CurrentPage',
      fuzzBucketName: 'FuzzBucketName',
      hasRisk: 'HasRisk',
      lang: 'Lang',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      currentPage: 'number',
      fuzzBucketName: 'string',
      hasRisk: 'number',
      lang: 'string',
      pageSize: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

