// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCdsFilesResponseBodyFileModels extends $dara.Model {
  /**
   * @remarks
   * File type classification. The network disk will classify files according to their suffix and MIME Type. The main categories are `doc`, `image`, `audio` and `video`.
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
   * The time when the file was created.
   * 
   * @example
   * 2022-09-06T07:27:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The file creator.
   * 
   * @example
   * user01
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
   * The download link. The default validity period is 15 minutes.
   * 
   * @example
   * https://data.aliyunpds.com/hz22%2F5d5b986facbec311ef844c25954f96821497b383%2F5d5b986f955410dd991646bb87c6b4e899ef****?Expires=xxx&OSSAccessKeyId=xxx&Signature=xxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The filename extension.
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
   * Valid value:
   * 
   * *   file
   * *   folder
   * 
   * @example
   * file
   */
  fileType?: string;
  /**
   * @remarks
   * The MD5 hash of the object.
   * 
   * @example
   * 63c83ececb4e6926c51448fc5ecb****
   */
  md5?: string;
  /**
   * @remarks
   * The time when the file was last modified.
   * 
   * @example
   * 2022-09-06T07:27:08Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * Modifier.
   * 
   * @example
   * user02
   */
  modifier?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * fvt-appcenterp4qwa
   */
  name?: string;
  /**
   * @remarks
   * The time when the file was last opened.
   * 
   * @example
   * 2022-09-06T07:27:08Z
   */
  openTime?: string;
  /**
   * @remarks
   * The timestamp that indicates the time when the file was last opened.
   * 
   * @example
   * 168951245231
   */
  openTimeStamp?: number;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * @example
   * 3343213ff2f63db8470984e6c92c3213dfdw****
   */
  parentId?: string;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to obtain the list of regions supported by cloud computers.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The SHA1 hash of the data file.
   * 
   * @example
   * EA4942AA8761213890A5C386F88E6464D2C3****
   */
  sha1?: string;
  /**
   * @remarks
   * The size of the file. Unit: bytes.
   * 
   * @example
   * 102400
   */
  size?: number;
  /**
   * @remarks
   * The URL of the thumbnail.
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
   * The response parameters. If the request was successful, `success` is returned. If the request failed, an error message is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The total number of file list entries.
   * 
   * @example
   * 0
   */
  count?: string;
  /**
   * @remarks
   * The files.
   */
  fileModels?: ListCdsFilesResponseBodyFileModels[];
  /**
   * @remarks
   * Error message. This parameter is not returned if the value of Code is `success`.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The token used to start the next query. If the `NextToken` is empty, the next query does not exist.
   * 
   * @example
   * WyI2MzhmMjA2ZTFmZGZlZGVjZDk3OTRlNzVhZmIwMDFiZmM5NWQ3YTgwIiwibiIsIm4iLDEsLTEsMTY3MDMyNDMzNTAzMSwiNjM4ZjIwNmZjNDFkMzIwOTZmZWU0NGYxODkwY2I5ZjI0Mjg0NzM2****
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 40D86754-20FD-53DC-A9B8-25F7FECC****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
   * 
   * Valid value:
   * 
   * *   true
   * *   false
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

