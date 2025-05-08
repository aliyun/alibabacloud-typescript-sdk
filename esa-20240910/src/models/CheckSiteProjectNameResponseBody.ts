// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSiteProjectNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task name is valid. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  check?: boolean;
  /**
   * @remarks
   * The result description.
   * 
   * @example
   * project name pass the check
   */
  description?: string;
  /**
   * @remarks
   * The name of the real-time log delivery task.
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

