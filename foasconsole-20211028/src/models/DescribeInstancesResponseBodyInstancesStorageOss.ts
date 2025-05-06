// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesStorageOss extends $dara.Model {
  /**
   * @example
   * oss_flink
   */
  bucket?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

