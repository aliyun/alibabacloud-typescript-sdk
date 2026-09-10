// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeOncallSchedule extends $dara.Model {
  /**
   * @remarks
   * The extension details.
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1700000000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modified time.
   * 
   * @example
   * 1700000000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The unique identifier.
   * 
   * @example
   * SampleValue
   */
  identifier?: string;
  /**
   * @remarks
   * The schedule name.
   * 
   * @example
   * SampleName
   */
  name?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * SampleValue
   */
  source?: string;
  /**
   * @remarks
   * The workspace.
   * 
   * @example
   * SampleValue
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

