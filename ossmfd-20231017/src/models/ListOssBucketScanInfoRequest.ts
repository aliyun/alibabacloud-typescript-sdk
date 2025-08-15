// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOssBucketScanInfoRequest extends $dara.Model {
  /**
   * @example
   * testBucket******
   */
  bucketName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * test******
   */
  fuzzBucketName?: string;
  /**
   * @example
   * 1
   */
  hasRisk?: number;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
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

