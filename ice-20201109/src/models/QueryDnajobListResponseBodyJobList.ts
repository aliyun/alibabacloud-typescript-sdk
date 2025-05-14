// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDNAJobListResponseBodyJobListInput } from "./QueryDnajobListResponseBodyJobListInput";


export class QueryDNAJobListResponseBodyJobList extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * "InvalidParameter.ResourceNotFound"
   */
  code?: string;
  /**
   * @remarks
   * The configurations of the media fingerprint analysis job.
   * 
   * @example
   * {"SaveType": "save","MediaType"":"video"}
   */
  config?: string;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2022-12-28T03:21:37Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the media fingerprint library.
   * 
   * @example
   * 2288c6ca184c0e47098a5b665e2a12****
   */
  DBId?: string;
  /**
   * @remarks
   * The URL of the media fingerprint analysis result.
   * 
   * @example
   * http://test_bucket.oss-cn-shanghai.aliyuncs.com/fingerprint/video/search_result/5/5.txt
   */
  DNAResult?: string;
  /**
   * @remarks
   * The time when the job was complete.
   * 
   * @example
   * 2022-12-28T03:21:44Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2a12****
   */
  id?: string;
  /**
   * @remarks
   * The details of the input file.
   */
  input?: QueryDNAJobListResponseBodyJobListInput;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * "The resource operated \\"a887d0b***d805ef6f7f6786302\\" cannot be found"
   */
  message?: string;
  /**
   * @remarks
   * The primary key of the video. You must make sure that each primary key is unique.
   * 
   * @example
   * 3ca84a39a9024f19853b21be9cf9****
   */
  primaryKey?: string;
  /**
   * @remarks
   * The job state. Valid values:
   * 
   * *   **Queuing**: The job is waiting in the queue.
   * *   **Analysing**: The job is in progress.
   * *   **Success**: The job is successful.
   * *   **Fail**: The job failed.
   * 
   * @example
   * Queuing
   */
  status?: string;
  /**
   * @remarks
   * The user-defined data.
   * 
   * @example
   * testdna
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      config: 'Config',
      creationTime: 'CreationTime',
      DBId: 'DBId',
      DNAResult: 'DNAResult',
      finishTime: 'FinishTime',
      id: 'Id',
      input: 'Input',
      message: 'Message',
      primaryKey: 'PrimaryKey',
      status: 'Status',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      config: 'string',
      creationTime: 'string',
      DBId: 'string',
      DNAResult: 'string',
      finishTime: 'string',
      id: 'string',
      input: QueryDNAJobListResponseBodyJobListInput,
      message: 'string',
      primaryKey: 'string',
      status: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

