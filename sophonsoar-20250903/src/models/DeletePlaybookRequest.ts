// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for requests and received messages. Values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * UUID of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * e99dab31-499b-4307-9248-xxxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * User ID for the administrator to switch to another member\\"s perspective.
   * 
   * @example
   * 13760*****718726
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookUuid: 'string',
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

