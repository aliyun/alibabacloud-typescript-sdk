// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertMediaToSearchLibRequest extends $dara.Model {
  imagesInput?: string;
  /**
   * @remarks
   * The URL of the video, audio, or image file that you want to import to the search library.
   * 
   * Note: Make sure that you specify a correct file name and the bucket in which the file resides is in the same region where this operation is called. Otherwise, the file cannot be found or the operation may fail.
   * 
   * Specify an Object Storage Service (OSS) URL in the following format: oss://[Bucket name]/[File path]. For example, you can specify oss://[example-bucket-****]/[object_path-****].
   * 
   * Specify an HTTP URL in the following format: public endpoint. For example, you can specify http://example-test-\\*\\*\\*\\*.mp4.
   * 
   * This parameter is required.
   * 
   * @example
   * http://example-test-****.mp4
   */
  input?: string;
  /**
   * @remarks
   * The ID of the media asset. Each media ID is unique. If you leave this parameter empty, a media ID is automatically generated for this parameter.
   * 
   * @example
   * 411bed50018971edb60b0764a0ec6***
   */
  mediaId?: string;
  /**
   * @remarks
   * The type of the media asset. Valid values:
   * 
   * *   video (default)
   * *   image
   * *   audio
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * The message body.
   * 
   * @example
   * {}
   */
  msgBody?: string;
  namespace?: string;
  /**
   * @remarks
   * The name of the search library. Default value: ims-default-search-lib.
   * 
   * @example
   * test1
   */
  searchLibName?: string;
  static names(): { [key: string]: string } {
    return {
      imagesInput: 'ImagesInput',
      input: 'Input',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
      msgBody: 'MsgBody',
      namespace: 'Namespace',
      searchLibName: 'SearchLibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imagesInput: 'string',
      input: 'string',
      mediaId: 'string',
      mediaType: 'string',
      msgBody: 'string',
      namespace: 'string',
      searchLibName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

