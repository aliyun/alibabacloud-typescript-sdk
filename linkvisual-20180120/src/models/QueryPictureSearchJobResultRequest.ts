// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPictureSearchJobResultRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the image search application instance. You can call the [QueryPictureSearchApps](https://help.aliyun.com/document_detail/206608.html) operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * fdc576d03c094faea9fa10fbf48c****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the integrated image search job. You can call the [QueryPictureSearchJob](https://help.aliyun.com/document_detail/206778.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * b7e501d0d2524a4caeb50df3282a****
   */
  jobId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Minimum value: 1. Maximum value: 50. Default value: 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      currentPage: 'CurrentPage',
      jobId: 'JobId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      currentPage: 'number',
      jobId: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

