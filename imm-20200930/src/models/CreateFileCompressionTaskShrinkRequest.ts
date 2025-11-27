// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileCompressionTaskShrinkRequest extends $dara.Model {
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
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The notification settings. For information about the asynchronous notification format, see [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html).
   */
  notificationShrink?: string;
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
  sourcesShrink?: string;
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
      credentialConfigShrink: 'CredentialConfig',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      sourceManifestURI: 'SourceManifestURI',
      sourcesShrink: 'Sources',
      targetURI: 'TargetURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressedFormat: 'string',
      credentialConfigShrink: 'string',
      notificationShrink: 'string',
      projectName: 'string',
      sourceManifestURI: 'string',
      sourcesShrink: 'string',
      targetURI: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

