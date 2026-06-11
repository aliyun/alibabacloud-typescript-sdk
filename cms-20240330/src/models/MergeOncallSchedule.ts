// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeOncallSchedule extends $dara.Model {
  /**
   * @remarks
   * Details of the on-call schedule.
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The UTC time when the on-call schedule was created.
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The UTC time when the on-call schedule was last modified.
   */
  gmtModified?: string;
  /**
   * @remarks
   * The unique identifier of the on-call schedule.
   */
  identifier?: string;
  /**
   * @remarks
   * The name of the on-call schedule.
   */
  name?: string;
  /**
   * @remarks
   * The creation source of the on-call schedule.
   */
  source?: string;
  /**
   * @remarks
   * The workspace that the on-call schedule belongs to.
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      identifier: 'identifier',
      name: 'name',
      source: 'source',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'string',
      gmtModified: 'string',
      identifier: 'string',
      name: 'string',
      source: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.detail) {
      $dara.Model.validateMap(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

