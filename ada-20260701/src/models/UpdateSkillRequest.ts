// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The updated description of the skill.
   * 
   * @example
   * A skill used to perform code review, security checks, and risk alerts
   */
  description?: string;
  /**
   * @remarks
   * The expected version number.
   * 
   * @example
   * 2
   */
  expectedVersion?: number;
  /**
   * @remarks
   * The updated metadata of the skill. The JSON object is replaced as a whole. The content supports one of the following: Transit ID, bundleUrl, or skillMd.
   * 
   * @example
   * {"transitId":"transit_example456"}
   */
  metadata?: any;
  /**
   * @remarks
   * The name of the skill to be updated. This parameter is used only to locate the skill and cannot be used to modify the name.
   * 
   * This parameter is required.
   * 
   * @example
   * code-review
   */
  name?: string;
  /**
   * @remarks
   * The updated visibility. Valid values: `user` and `tenant`.
   * 
   * @example
   * tenant
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expectedVersion: 'ExpectedVersion',
      metadata: 'Metadata',
      name: 'Name',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expectedVersion: 'number',
      metadata: 'any',
      name: 'string',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

