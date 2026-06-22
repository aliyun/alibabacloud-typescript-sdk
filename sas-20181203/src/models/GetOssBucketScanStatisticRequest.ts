// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssBucketScanStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The list of bucket names.
   */
  bucketNameList?: string[];
  /**
   * @remarks
   * The data source. Valid values:
   * - **API**: API-based scan.
   * - **OSS**: OSS-based scan.
   * 
   * @example
   * API
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      bucketNameList: 'BucketNameList',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketNameList: { 'type': 'array', 'itemType': 'string' },
      source: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bucketNameList)) {
      $dara.Model.validateArray(this.bucketNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

