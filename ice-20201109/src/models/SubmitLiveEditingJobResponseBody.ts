// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitLiveEditingJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the live editing job.
   * 
   * @example
   * ****d80e4e4044975745c14b****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the output media asset.
   * 
   * @example
   * ****c469e944b5a856828dc2****
   */
  mediaId?: string;
  /**
   * @remarks
   * The URL of the output file.
   * 
   * @example
   * http://test-bucket.cn-shanghai.aliyuncs.com/test.mp4
   */
  mediaURL?: string;
  /**
   * @remarks
   * The ID of the live editing project.
   * 
   * @example
   * ****fddd7748b58bf1d47e95****
   */
  projectId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ****36-3C1E-4417-BDB2-1E034F****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the VOD media asset. This parameter is returned only if the output destination is VOD.
   * 
   * @example
   * ****d7578s4h75ci945c14b****
   */
  vodMediaId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      mediaId: 'MediaId',
      mediaURL: 'MediaURL',
      projectId: 'ProjectId',
      requestId: 'RequestId',
      vodMediaId: 'VodMediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      mediaId: 'string',
      mediaURL: 'string',
      projectId: 'string',
      requestId: 'string',
      vodMediaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

