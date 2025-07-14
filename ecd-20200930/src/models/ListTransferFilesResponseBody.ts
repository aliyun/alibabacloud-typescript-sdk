// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransferFilesResponseBodyFiles extends $dara.Model {
  /**
   * @example
   * https://app-center-icon-pre-hangzhou.oss-cn-hangzhou.aliyuncs.com/tenant****
   */
  iconUrl?: string;
  /**
   * @example
   * trf-a213msf****
   */
  id?: string;
  name?: string;
  ossFileName?: string;
  /**
   * @example
   * transfer/1244234/****
   */
  ossFilePath?: string;
  /**
   * @example
   * 10853079
   */
  size?: string;
  /**
   * @example
   * DELETED
   */
  status?: string;
  /**
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
  files?: ListTransferFilesResponseBodyFiles[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
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

