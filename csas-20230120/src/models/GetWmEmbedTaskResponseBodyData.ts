// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWmEmbedTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * https://example.com/embed-****.pdf
   */
  fileUrl?: string;
  /**
   * @example
   * 171859****
   */
  fileUrlExp?: string;
  /**
   * @example
   * embed-****.pdf
   */
  filename?: string;
  /**
   * @example
   * d41d8cd98f00b204e9800998ecf8****
   */
  outFileHashMd5?: string;
  /**
   * @example
   * 123**
   */
  outFileSize?: number;
  /**
   * @example
   * job:5GfrJYsoaffmCE7Z5bZtjUxxxxxxxxxx
   */
  taskId?: string;
  /**
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

