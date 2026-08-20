// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecommendNextActionsRequest extends $dara.Model {
  /**
   * @remarks
   * The extraction instruction.
   * 
   * @example
   * Only recommend next steps related to data analysis
   */
  customPrompt?: string;
  /**
   * @remarks
   * The output type: `conversation/skill/task`.
   * 
   * @example
   * followUpOnly
   */
  outputType?: string;
  /**
   * @remarks
   * The number of recent messages used to assemble contextual information.
   * 
   * @example
   * 10
   */
  recentMessageCount?: number;
  /**
   * @remarks
   * The session ID to filter by. If specified, returns all Active/Expired status information associated with this session.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSessionId
   */
  sessionId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass this explicitly with --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      customPrompt: 'customPrompt',
      outputType: 'outputType',
      recentMessageCount: 'recentMessageCount',
      sessionId: 'sessionId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customPrompt: 'string',
      outputType: 'string',
      recentMessageCount: 'number',
      sessionId: 'string',
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

