// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for requests and received messages.
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * e99dab31-499b-4307-9248-xxxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The version ID of the playbook, which is only effective when **PlaybookVersionType** is **History**.
   * 
   * @example
   * 36c9dcd6-****-4262-****-d508464ebd21
   */
  playbookVersion?: string;
  /**
   * @remarks
   * The version type of the playbook, with the following values:
   * 
   * - **Draft**: Editing state.
   * - **Online**: Online version.
   * - **History**: Historical version.
   * 
   * @example
   * History
   */
  playbookVersionType?: string;
  /**
   * @remarks
   * The user ID for the administrator to switch to another member\\"s perspective.
   * 
   * @example
   * 13760*****718726
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
      playbookVersion: 'PlaybookVersion',
      playbookVersionType: 'PlaybookVersionType',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookUuid: 'string',
      playbookVersion: 'string',
      playbookVersionType: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

