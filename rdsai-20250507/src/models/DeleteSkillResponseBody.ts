// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Skill catalog revision number.
   * 
   * @example
   * 1
   */
  catalogRevision?: number;
  /**
   * @remarks
   * Indicates whether the Skill is deleted.
   */
  deleted?: boolean;
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * success
   */
  result?: string;
  /**
   * @remarks
   * The ID of the deleted Skill.
   * 
   * @example
   * skill-example
   */
  skillId?: string;
  static names(): { [key: string]: string } {
    return {
      catalogRevision: 'CatalogRevision',
      deleted: 'Deleted',
      requestId: 'RequestId',
      result: 'Result',
      skillId: 'SkillId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogRevision: 'number',
      deleted: 'boolean',
      requestId: 'string',
      result: 'string',
      skillId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

