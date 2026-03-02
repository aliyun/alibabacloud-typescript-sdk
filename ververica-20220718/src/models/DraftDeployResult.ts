// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ValidateStatementResult } from "./ValidateStatementResult";


export class DraftDeployResult extends $dara.Model {
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
   * 58718c99-3b29-4c5e-93bb-c9fc4ec6****
   */
  deploymentId?: string;
  /**
   * @remarks
   * The deployment information.
   * 
   * @example
   * ""
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
  static names(): { [key: string]: string } {
    return {
      artifactValidationDetail: 'artifactValidationDetail',
      deploymentId: 'deploymentId',
      message: 'message',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactValidationDetail: ValidateStatementResult,
      deploymentId: 'string',
      message: 'string',
      success: 'boolean',
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

