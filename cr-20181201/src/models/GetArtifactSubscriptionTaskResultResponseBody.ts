// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetArtifactSubscriptionTaskResultResponseBodyTaskResults } from "./GetArtifactSubscriptionTaskResultResponseBodyTaskResults";


export class GetArtifactSubscriptionTaskResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A8768F6-9B47-5127-A075-9CFB9F79181F
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the artifact subscription task.
   */
  taskResults?: GetArtifactSubscriptionTaskResultResponseBodyTaskResults[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      taskResults: 'TaskResults',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      taskResults: { 'type': 'array', 'itemType': GetArtifactSubscriptionTaskResultResponseBodyTaskResults },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.taskResults)) {
      $dara.Model.validateArray(this.taskResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

