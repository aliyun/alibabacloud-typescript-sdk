// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveAvatarProjectResponseBody extends $dara.Model {
  /**
   * @example
   * 1000222
   */
  agentId?: string;
  /**
   * @example
   * 040002
   */
  errorCode?: string;
  /**
   * @example
   * Failed to proxy flink ui request, message: An error occurred: Invalid UUID string: jobsn
   */
  errorMessage?: string;
  /**
   * @example
   * error
   */
  errorMsg?: string;
  /**
   * @example
   * 812907463682949120
   */
  projectId?: string;
  /**
   * @example
   * doc_test_3
   */
  projectName?: string;
  /**
   * @example
   * 0E8B1746-AE35-5C4B-A3A8-345B274AE32C
   */
  requestId?: string;
  /**
   * @example
   * DRAFT
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      errorMsg: 'errorMsg',
      projectId: 'projectId',
      projectName: 'projectName',
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      errorMsg: 'string',
      projectId: 'string',
      projectName: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

