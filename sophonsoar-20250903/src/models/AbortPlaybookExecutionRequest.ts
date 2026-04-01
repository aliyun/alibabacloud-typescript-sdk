// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AbortPlaybookExecutionRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e776dab31-499b-4307-9248-xxxxxx
   */
  playbookExecutionUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e99dab31-499b-4307-9248-xxxxxx
   */
  playbookUuid?: string;
  /**
   * @example
   * 13760*****718726
   */
  roleFor?: number;
  /**
   * @example
   * 0
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookExecutionUuid: 'PlaybookExecutionUuid',
      playbookUuid: 'PlaybookUuid',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookExecutionUuid: 'string',
      playbookUuid: 'string',
      roleFor: 'number',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

