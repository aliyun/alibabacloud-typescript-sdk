// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataLimitSetResponseBodyDataLimitSetOssBucketList extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket to which the OSS object belongs.
   * 
   * @example
   * oss-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * The region ID of the OSS object.
   * 
   * @example
   * cn-****
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

