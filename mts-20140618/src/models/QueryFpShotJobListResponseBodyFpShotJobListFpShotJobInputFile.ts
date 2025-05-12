// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobInputFile extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket in which the job input resides.
   * 
   * @example
   * oss-test
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS region in which the job input resides.
   * 
   * @example
   * oss-cn-beijing
   */
  location?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) object that is used as the job input.
   * 
   * @example
   * test.mp4
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

