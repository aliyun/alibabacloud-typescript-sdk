// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmartJobsResponseBodySmartJobListOutputConfig extends $dara.Model {
  /**
   * @remarks
   * The Object Storage Service (OSS) bucket.
   * 
   * @example
   * test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS object.
   * 
   * @example
   * test-object
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
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

