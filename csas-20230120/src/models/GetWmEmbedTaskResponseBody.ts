// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWmEmbedTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The temporary URL of the file embedded with watermark information.
   * 
   * @example
   * https://example.com/embed-****.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * Expiration time of FileUrl, formatted as a Unix timestamp with second-level precision.
   * 
   * @example
   * 171859****
   */
  fileUrlExp?: string;
  /**
   * @remarks
   * The filename of the file embedded with watermark information.
   * 
   * @example
   * embed-****.pdf
   */
  filename?: string;
  /**
   * @remarks
   * The MD5 hash of the file with embedded watermark information, used for troubleshooting.
   * 
   * @example
   * d41d8cd98f00b204e9800998ecf8****
   */
  outFileHashMd5?: string;
  /**
   * @remarks
   * The size in bytes of the file embedded with watermark information. This is used for troubleshooting.
   * 
   * @example
   * 123**
   */
  outFileSize?: number;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * job:5GfrJYsoaffmCE7Z5bZtjUxxxxxxxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * Task Status. Valid values:  
   * - **Running**: The job is running.  
   * - **Success**: The job succeeded.  
   * - **Failed**: The job failed.
   * 
   * @example
   * Success
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      fileUrlExp: 'FileUrlExp',
      filename: 'Filename',
      outFileHashMd5: 'OutFileHashMd5',
      outFileSize: 'OutFileSize',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      fileUrlExp: 'string',
      filename: 'string',
      outFileHashMd5: 'string',
      outFileSize: 'number',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWmEmbedTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the watermark embedding job.
   */
  data?: GetWmEmbedTaskResponseBodyData;
  /**
   * @remarks
   * The ID of this request.
   * 
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E850D8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetWmEmbedTaskResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

