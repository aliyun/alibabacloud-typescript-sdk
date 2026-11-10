// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSiteProjectNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the project name can be added. Valid values:
   * 
   * - **true**: The name can be added.
   * - **false**: The name cannot be added.
   * 
   * @example
   * true
   */
  check?: boolean;
  /**
   * @remarks
   * The description of the result.
   * 
   * @example
   * project name pass the check
   */
  description?: string;
  /**
   * @remarks
   * The name of the real-time log project.
   * 
   * @example
   * dcdn_waf_userAccount_log
   */
  projectName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34DCBC8A-****-****-****-6DAA11D7DDBD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      check: 'Check',
      description: 'Description',
      projectName: 'ProjectName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      check: 'boolean',
      description: 'string',
      projectName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

