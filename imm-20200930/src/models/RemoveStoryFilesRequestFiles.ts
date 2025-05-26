// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveStoryFilesRequestFiles extends $dara.Model {
  /**
   * @remarks
   * The URI of the Object Storage Service (OSS) bucket where you store the files that you want to delete.
   * 
   * Specify the value in the oss://${Bucket}/${Object} format. `${Bucket}` specifies the name of the OSS bucket that resides in the same region as the current project. `${Object}` specifies the complete path to the files that have an extension.
   * 
   * @example
   * oss://bucket1/object
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

