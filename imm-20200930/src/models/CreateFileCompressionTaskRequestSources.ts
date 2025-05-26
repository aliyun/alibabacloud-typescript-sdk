// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileCompressionTaskRequestSources extends $dara.Model {
  /**
   * @remarks
   * Specifies the path of the object in the package, or renames the object in the package.
   * 
   * *   Leave this parameter empty to retain the original directory structure of the object in the package. For example, if the object is stored at `oss://test-bucket/test-dir/test-object.doc` and you do not specify this parameter, the path of the object in the package is `/test-dir/test-object.doc`.
   * *   Rename the object. For example, if the object is stored at `oss://test-bucket/test-object.jpg` and you set the **Alias** parameter to `test-rename-object.jpg`, the name of the object in the package is `test-rename-object.jpg`.
   * *   Specify a different path for the object in the package. For example, if the directory to be packed is `oss://test-bucket/test-dir/` and you set the **Alias** parameter to `/new-dir/`, all objects in the directory are placed in the `/new-dir/` path in the package.
   * *   Set the parameter to `/` to remove the original directory structure.
   * 
   * >  Duplicate object names may cause a failure in extracting the objects from the package, depending on the packing tool that you use. We recommend that you avoid using duplicate object names when you rename objects in the packing task.
   * 
   * @example
   * /new-dir/
   */
  alias?: string;
  /**
   * @remarks
   * The object matching rule. Valid values: `fullname` and `prefix`. Default value: `prefix`
   * 
   * *   `prefix`: matches objects by object name prefix.
   * *   `fullname`: exactly matches one single object by its full object name.
   * 
   * @example
   * fullname
   */
  mode?: string;
  /**
   * @remarks
   * The OSS URI of the object or directory.
   * 
   * Specify the OSS URI in the oss://${Bucket}/${Object} format, where `${Bucket}` is the name of the bucket in the same region as the current project and `${Object}` is a directory or object:
   * 
   * When you pack a directory, `${Object}` is the path of the directory.
   * 
   * *   When you pack an object, `${Object}` is the path of the object with the extension included.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      mode: 'Mode',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      mode: 'string',
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

