// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaInfoJobResponseBodyMediaInfoJobInput extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the input media file is stored.
   * 
   * @example
   * example-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The region in which the OSS bucket that stores the input media file resides.
   * 
   * @example
   * example-location
   */
  location?: string;
  /**
   * @remarks
   * The name of the OSS object that is used as the input media file.
   * 
   * @example
   * example.flv
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

