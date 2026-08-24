// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDataAgentMemoryRequest extends $dara.Model {
  /**
   * @remarks
   * The memory content.
   * 
   * @example
   * Diamond pricing analysis requires examining the skewness and outliers of the distribution of each feature.
   */
  content?: string;
  /**
   * @remarks
   * The current DMS unit.
   * 
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @remarks
   * The source ID.
   * - If MemFrom is set to session, FromId indicates the session ID.
   * - If MemFrom is set to user, FromId indicates the RAM user ID.
   * 
   * @example
   * 2037**********23
   */
  fromId?: string;
  /**
   * @remarks
   * The memory label. Valid values:
   * - fact_specifications: fact definitions.
   * - task_constraints: node constraints.
   * - execution_config: execution configuration.
   * 
   * @example
   * fact_specifications
   */
  label?: string;
  /**
   * @remarks
   * The memory source. Valid values:
   * - session: generated from a session.
   * - user: edited by a user.
   * 
   * @example
   * user
   */
  memFrom?: string;
  /**
   * @remarks
   * The session ID.
   * - Note: This parameter is deprecated.
   * 
   * @example
   * fc5ice**********ac6e
   */
  sessionUuid?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      DMSUnit: 'DMSUnit',
      fromId: 'FromId',
      label: 'Label',
      memFrom: 'MemFrom',
      sessionUuid: 'SessionUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      DMSUnit: 'string',
      fromId: 'string',
      label: 'string',
      memFrom: 'string',
      sessionUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

