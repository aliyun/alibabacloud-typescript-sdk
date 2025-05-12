// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListArtifactBuildTaskLogResponseBodyBuildTaskLogs } from "./ListArtifactBuildTaskLogResponseBodyBuildTaskLogs";


export class ListArtifactBuildTaskLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The log entries of the artifact build task.
   */
  buildTaskLogs?: ListArtifactBuildTaskLogResponseBodyBuildTaskLogs[];
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the API request is successful. Valid values:
   * 
   * *   `true`: successful
   * *   `false`: failed
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C4C7DD0C-C9D6-437A-A7EE-121EFD70D002
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of log entries.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      buildTaskLogs: 'BuildTaskLogs',
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildTaskLogs: { 'type': 'array', 'itemType': ListArtifactBuildTaskLogResponseBodyBuildTaskLogs },
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.buildTaskLogs)) {
      $dara.Model.validateArray(this.buildTaskLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

