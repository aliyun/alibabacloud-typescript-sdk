// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ValidateStatementResult } from "./ValidateStatementResult";


export class AsyncDraftDeployResult extends $dara.Model {
  /**
   * @remarks
   * The verification result of the SQL syntax.
   */
  artifactValidationDetail?: ValidateStatementResult;
  /**
   * @remarks
   * The deployment ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  deploymentId?: string;
  /**
   * @remarks
   * The information about the deployment result.
   * 
   * @example
   * "Validation error: SQL validate failed"
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The state of the execution.
   * 
   * @example
   * FINISHED
   */
  ticketStatus?: string;
  static names(): { [key: string]: string } {
    return {
      artifactValidationDetail: 'artifactValidationDetail',
      deploymentId: 'deploymentId',
      message: 'message',
      success: 'success',
      ticketStatus: 'ticketStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactValidationDetail: ValidateStatementResult,
      deploymentId: 'string',
      message: 'string',
      success: 'boolean',
      ticketStatus: 'string',
    };
  }

  validate() {
    if(this.artifactValidationDetail && typeof (this.artifactValidationDetail as any).validate === 'function') {
      (this.artifactValidationDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

