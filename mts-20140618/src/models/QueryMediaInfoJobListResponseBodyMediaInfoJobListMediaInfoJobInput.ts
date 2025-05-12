// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaInfoJobListResponseBodyMediaInfoJobListMediaInfoJobInput extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket in which the input file is stored.
   * 
   * @example
   * example-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The ID of the OSS region.
   * 
   * @example
   * oss-cn-hangzhou
   */
  location?: string;
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) object that is used as the input file.
   * 
   * @example
   * example.mp4
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

