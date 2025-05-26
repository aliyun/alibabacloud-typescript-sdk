// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddStoryFilesResponseBodyFiles extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ResourceNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * The specified resource %s is not found.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The URI of the object.
   * 
   * The OSS URI follows the `oss://{bucketname}/{objectname}` format, where `bucketname` is the name of the bucket in the same region as the current project and `objectname` is the path of the object with the extension included.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

