// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFpShotFilesResponseBodyFpShotFileListFpShotFileInputFile extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the input file is stored.
   * 
   * @example
   * example-bucket-****
   */
  bucket?: string;
  /**
   * @remarks
   * The ID of the OSS region in which the input file resides.
   * 
   * @example
   * oss-cn-beijing
   */
  location?: string;
  /**
   * @remarks
   * The name of the OSS object that is used as the input file.
   * 
   * @example
   * example-****.mp4
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

