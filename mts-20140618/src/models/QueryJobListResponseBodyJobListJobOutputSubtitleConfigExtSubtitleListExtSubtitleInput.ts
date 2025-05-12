// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobListResponseBodyJobListJobOutputSubtitleConfigExtSubtitleListExtSubtitleInput extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the input caption file is stored.
   * 
   * @example
   * example-bucket-****
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS region in which the input caption file resides.
   * 
   * @example
   * oss-cn-hangzhou
   */
  location?: string;
  /**
   * @remarks
   * The name of the OSS object that is used as the input caption file.
   * 
   * @example
   * example-output.flv
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

