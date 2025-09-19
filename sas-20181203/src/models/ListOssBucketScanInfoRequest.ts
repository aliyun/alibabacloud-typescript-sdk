// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOssBucketScanInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket.
   * 
   * @example
   * iboxpublic****
   */
  bucketName?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the bucket that is used for fuzzy match.
   * 
   * @example
   * test
   */
  fuzzBucketName?: string;
  /**
   * @remarks
   * Specifies whether at-risk objects are detected. Valid values:
   * 
   * *   **0**: No at-risk objects are detected.
   * *   **1**: At-risk objects are detected.
   * 
   * @example
   * 1
   */
  hasRisk?: number;
  /**
   * @remarks
   * The language of the content in the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The check status of the bucket. Valid values:
   * 
   * *   **1**: The bucket is not checked.
   * *   **2**: All objects in the bucket are being checked.
   * *   **3**: Only new objects in the bucket are being checked.
   * *   **4**: The bucket is checked.
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

