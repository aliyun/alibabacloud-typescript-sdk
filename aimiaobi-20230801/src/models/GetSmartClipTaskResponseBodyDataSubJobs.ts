// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSmartClipTaskResponseBodyDataSubJobsFileAttr } from "./GetSmartClipTaskResponseBodyDataSubJobsFileAttr";


export class GetSmartClipTaskResponseBodyDataSubJobs extends $dara.Model {
  /**
   * @example
   * x\"x\"x\"x
   */
  errorMessage?: string;
  fileAttr?: GetSmartClipTaskResponseBodyDataSubJobsFileAttr;
  /**
   * @example
   * oss://default/bucket-name/path-xxx/xxx-1.mp4
   */
  fileKey?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * xxxxx
   */
  subJobId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      fileAttr: 'FileAttr',
      fileKey: 'FileKey',
      status: 'Status',
      subJobId: 'SubJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      fileAttr: GetSmartClipTaskResponseBodyDataSubJobsFileAttr,
      fileKey: 'string',
      status: 'string',
      subJobId: 'string',
    };
  }

  validate() {
    if(this.fileAttr && typeof (this.fileAttr as any).validate === 'function') {
      (this.fileAttr as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

