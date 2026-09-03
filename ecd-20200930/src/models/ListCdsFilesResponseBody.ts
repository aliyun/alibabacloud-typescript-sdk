// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCdsFilesResponseBodyFileModels extends $dara.Model {
  /**
   * @remarks
   * The file category. The cloud drive categorizes files based on file name extensions and MIME types. The main categories include `doc`, `image`, `audio`, and `video`.
   * 
   * @example
   * image
   */
  category?: string;
  /**
   * @remarks
   * The content type of the file.
   * 
   * @example
   * application/json
   */
  contentType?: string;
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard in the UTC format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-09-06T07:27:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The creator of the file.
   * 
   * @example
   * demo_user01@cn-shanghai.148875033399****
   */
  creator?: string;
  /**
   * @remarks
   * The file description.
   * 
   * @example
   * test1
   */
  description?: string;
  /**
   * @remarks
   * The download URL. The URL is valid for 15 minutes by default.
   * 
   * @example
   * https://data.aliyunpds.com/hz22%2F5d5b986facbec311ef844c25954f96821497b383%2F5d5b986f955410dd991646bb87c6b4e899ef****?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The file name extension.
   * 
   * @example
   * pdf
   */
  fileExtension?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 637725ff2f63db8470984e6c92c692b87d52****
   */
  fileId?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * isv/1019236948660053/temp/
   */
  filePath?: string;
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * file
   */
  fileType?: string;
  /**
   * @remarks
   * The MD5 hash value of the file.
   * 
   * @example
   * 63c83ececb4e6926c51448fc5ecb****
   */
  md5?: string;
  /**
   * @remarks
   * The time when the file was last modified. The time follows the ISO 8601 standard in the UTC format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-09-06T07:27:08Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The modifier of the file.
   * 
   * @example
   * demo_user02@cn-shanghai.148875033399****
   */
  modifier?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * SampleFile.pdf
   */
  name?: string;
  /**
   * @remarks
   * The time when the file was last opened. The time follows the ISO 8601 standard in the UTC format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-09-06T07:27:08Z
   */
  openTime?: string;
  /**
   * @remarks
   * The timestamp of the last time the file was opened.
   * 
   * @example
   * 168951245231
   */
  openTimeStamp?: number;
  /**
   * @remarks
   * The parent folder ID.
   * 
   * @example
   * 3343213ff2f63db8470984e6c92c3213dfdw****
   */
  parentId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The SHA1 hash value of the data file.
   * 
   * @example
   * EA4942AA8761213890A5C386F88E6464D2C3****
   */
  sha1?: string;
  /**
   * @remarks
   * The file size. Unit: bytes.
   * 
   * @example
   * 102400
   */
  size?: number;
  /**
   * @remarks
   * The thumbnail URL.
   * 
   * @example
   * https://data.aliyunpds.com/hz22%2F5d5b986facbec311ef844c25954f96821497b383%2F5d5b986f955410dd991646bb87c6b4e899ef****?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx
   */
  thumbnail?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      contentType: 'ContentType',
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      downloadUrl: 'DownloadUrl',
      fileExtension: 'FileExtension',
      fileId: 'FileId',
      filePath: 'FilePath',
      fileType: 'FileType',
      md5: 'Md5',
      modifiedTime: 'ModifiedTime',
      modifier: 'Modifier',
      name: 'Name',
      openTime: 'OpenTime',
      openTimeStamp: 'OpenTimeStamp',
      parentId: 'ParentId',
      regionId: 'RegionId',
      sha1: 'Sha1',
      size: 'Size',
      thumbnail: 'Thumbnail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      contentType: 'string',
      createTime: 'string',
      creator: 'string',
      description: 'string',
      downloadUrl: 'string',
      fileExtension: 'string',
      fileId: 'string',
      filePath: 'string',
      fileType: 'string',
      md5: 'string',
      modifiedTime: 'string',
      modifier: 'string',
      name: 'string',
      openTime: 'string',
      openTimeStamp: 'number',
      parentId: 'string',
      regionId: 'string',
      sha1: 'string',
      size: 'number',
      thumbnail: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCdsFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution result. A value of `success` indicates success. Otherwise, an error message is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The total number of entries in the file list.
   * 
   * @example
   * 2
   */
  count?: string;
  /**
   * @remarks
   * The file list.
   */
  fileModels?: ListCdsFilesResponseBodyFileModels[];
  /**
   * @remarks
   * The error message. This parameter is not returned if Code is `success`.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next query. If NextToken is empty, no more results exist.
   * 
   * @example
   * aGN4YzAxQGNuLWhhbmd6aG91LjExNzU5NTMyNjgzMTQ1****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40D86754-20FD-53DC-A9B8-25F7FECC****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      fileModels: 'FileModels',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'string',
      fileModels: { 'type': 'array', 'itemType': ListCdsFilesResponseBodyFileModels },
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.fileModels)) {
      $dara.Model.validateArray(this.fileModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

