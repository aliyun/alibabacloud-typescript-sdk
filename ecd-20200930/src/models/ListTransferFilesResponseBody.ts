// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransferFilesResponseBodyFiles extends $dara.Model {
  /**
   * @remarks
   * The URL of the file icon.
   * 
   * > 
   * 
   * *   For image file types (.png, .jpg, .jpeg, .gif, .webp, and .svg), the URL of the specific image is returned.
   * 
   * *   For other file types, the URL of the default image is returned.
   * 
   * @example
   * https://app-center-icon-pre-hangzhou.oss-cn-hangzhou.aliyuncs.com/tenant****
   */
  iconUrl?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * trf-a213msf****
   */
  id?: string;
  /**
   * @remarks
   * The file name.
   */
  name?: string;
  /**
   * @remarks
   * The name of the object stored in OSS.
   * 
   * > 
   * 
   * *   A value is returned for this parameter only when the object is stored in a custom OSS bucket.
   */
  ossFileName?: string;
  /**
   * @remarks
   * The path of the object in the OSS bucket.
   * 
   * > 
   * 
   * *   A value is returned for this parameter only when the object is stored in a custom OSS bucket.
   * 
   * @example
   * transfer/1244234/****
   */
  ossFilePath?: string;
  /**
   * @remarks
   * The file size.
   * 
   * @example
   * 10853079
   */
  size?: string;
  /**
   * @remarks
   * The file status.
   * 
   * Valid values:
   * 
   * *   DELETING
   * *   DELETED
   * *   UPLOADED
   * 
   * @example
   * DELETED
   */
  status?: string;
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * txt
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      iconUrl: 'IconUrl',
      id: 'Id',
      name: 'Name',
      ossFileName: 'OssFileName',
      ossFilePath: 'OssFilePath',
      size: 'Size',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iconUrl: 'string',
      id: 'string',
      name: 'string',
      ossFileName: 'string',
      ossFilePath: 'string',
      size: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransferFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The files.
   */
  files?: ListTransferFilesResponseBodyFiles[];
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Maximum value: 100.
   * 
   * Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of `NextToken` is a pagination token, which can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': ListTransferFilesResponseBodyFiles },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

