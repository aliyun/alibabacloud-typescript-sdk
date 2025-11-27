// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { Notification } from "./Notification";


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

export class CreateFileCompressionTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The format of the output file.
   * 
   * > Only the ZIP format is supported.
   * 
   * @example
   * zip
   */
  compressedFormat?: string;
  /**
   * @remarks
   * **If you have no special requirements, leave this parameter empty.**
   * 
   * The configurations of authorization chains. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The notification settings. For information about the asynchronous notification format, see [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html).
   */
  notification?: Notification;
  /**
   * @remarks
   * The name of the project.[](~~478153~~)
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The OSS URI of the inventory object that contains the objects to compress. The inventory object stores the objects to compress by using the same data structure of the Sources parameter in the JSON format. This parameter is suitable for specifying a large number of objects to compress.
   * 
   * >  You must specify this parameter or the `Sources` parameter. The `URI` parameter is required and the `Alias` parameter is optional. You can specify up to 80,000 compression rule by using SourceManifestURI in one single call to the operation. The following line provides an example of the content within an inventory object.
   * 
   *     [{"URI":"oss://<bucket>/<object>", "Alias":"/new-dir/new-name"}]
   * 
   * @example
   * oss://test-bucket/test-object.json
   */
  sourceManifestURI?: string;
  /**
   * @remarks
   * The objects to be packed and packing rules.
   * 
   * >  You must specify this parameter or the SourceManifestURI parameter. The Sources parameter can hold up to 100 packing rules. If you want to include more than 100 packing rules, use the SourceManifestURI parameter.
   */
  sources?: CreateFileCompressionTaskRequestSources[];
  /**
   * @remarks
   * The OSS URI of the package. The object name part in the URI is used as the name of the package. Example: `name.zip`.
   * 
   * Specify the OSS URI in the oss://${Bucket}/${Object} format, where `${Bucket}` is the name of the bucket in the same region as the current project and `${Object}` is the path of the object with the extension included.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-target-object.zip
   */
  targetURI?: string;
  /**
   * @remarks
   * The custom information, which is returned in an asynchronous notification and facilitates notification management. The maximum length of the value is 2,048 bytes.
   * 
   * @example
   * {"ID": "testuid","Name": "test-user","Avatar": "http://test.com/testuid"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      compressedFormat: 'CompressedFormat',
      credentialConfig: 'CredentialConfig',
      notification: 'Notification',
      projectName: 'ProjectName',
      sourceManifestURI: 'SourceManifestURI',
      sources: 'Sources',
      targetURI: 'TargetURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressedFormat: 'string',
      credentialConfig: CredentialConfig,
      notification: Notification,
      projectName: 'string',
      sourceManifestURI: 'string',
      sources: { 'type': 'array', 'itemType': CreateFileCompressionTaskRequestSources },
      targetURI: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

