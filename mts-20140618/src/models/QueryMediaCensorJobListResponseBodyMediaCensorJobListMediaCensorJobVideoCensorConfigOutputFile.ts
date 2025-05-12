// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobVideoCensorConfigOutputFile extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket that stores the output snapshot.
   * 
   * @example
   * test-bucket-****
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS region in which the OSS bucket for storing the output snapshot resides.
   * 
   * @example
   * oss-cn-shanghai
   */
  location?: string;
  /**
   * @remarks
   * The one or more OSS objects that are generated as the output snapshots.
   * 
   * > In the example, {Count} is a placeholder. The OSS objects that are generated as output snapshots are named `output00001-****.jpg, output00002-****.jpg`, and so on.
   * 
   * @example
   * output{Count}.jpg
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

