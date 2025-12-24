// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyPlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the playbook.
   * 
   * @example
   * playbook description
   */
  description?: string;
  /**
   * @remarks
   * The display name of the playbook.
   * 
   * This parameter is required.
   * 
   * @example
   * playbook_xxx
   */
  displayName?: string;
  /**
   * @remarks
   * The language of the content within the request and the response. Valid values:
   * 
   * *   **zh**: Chinese (default).
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The release version of the playbook that you want to copy. Default value: 0. Valid values:
   * 
   * *   \\-1: The version that is being edited.
   * *   0: The latest online version of the current playbook.
   * 
   * @example
   * 0
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The ID of the user who switches from the current view to the destination view by using the management account.
   * 
   * @example
   * 137602*****718726
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * 
   * *   **0** (default): the view of the current account.
   * *   **1**: the view of the global account.
   * 
   * @example
   * 0
   */
  roleType?: string;
  /**
   * @remarks
   * The UUID of the playbook that you want to copy.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to query the UUIDs of playbooks.
   * 
   * This parameter is required.
   * 
   * @example
   * 94bc318c-****-4cba-****-801ccb0d739f
   */
  sourcePlaybookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      lang: 'Lang',
      releaseVersion: 'ReleaseVersion',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      sourcePlaybookUuid: 'SourcePlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      lang: 'string',
      releaseVersion: 'string',
      roleFor: 'number',
      roleType: 'string',
      sourcePlaybookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

