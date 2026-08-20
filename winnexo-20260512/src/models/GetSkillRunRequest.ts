// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillRunRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include execution logs. Default value: false. Enable this parameter only for troubleshooting.
   * 
   * @example
   * false
   */
  includeLogs?: boolean;
  /**
   * @remarks
   * The evaluation run ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleRunId
   */
  runId?: string;
  /**
   * @remarks
   * The tenant ID to which the task belongs.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      includeLogs: 'includeLogs',
      runId: 'runId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeLogs: 'boolean',
      runId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

