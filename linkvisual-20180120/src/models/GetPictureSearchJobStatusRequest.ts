// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPictureSearchJobStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the image search application instance. You can call the [QueryPictureSearchApps](https://help.aliyun.com/document_detail/206608.html) operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 892f97c9518548469d319d955d98****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The ID of the image search task. You can call the [QueryPictureSearchJob](https://help.aliyun.com/document_detail/206778.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * b3786935a71442efae014c7b2212****
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

