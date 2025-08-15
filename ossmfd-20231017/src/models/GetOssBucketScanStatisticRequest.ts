// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOssBucketScanStatisticRequest extends $dara.Model {
  bucketNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      bucketNameList: 'BucketNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketNameList: { 'type': 'array', 'itemType': 'string' },
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

