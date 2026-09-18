// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillRequest extends $dara.Model {
  /**
   * @remarks
   * The Skill name.
   * 
   * This parameter is required.
   * 
   * @example
   * code-review
   */
  name?: string;
  /**
   * @remarks
   * The network type of the download URL. Valid values: public and internal. If omitted, no download URL is generated.
   * 
   * @example
   * public
   */
  network?: string;
  /**
   * @remarks
   * The release history version number to query. If omitted, the current Skill main record is returned.
   * 
   * @example
   * 2
   */
  skillVersion?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      network: 'Network',
      skillVersion: 'SkillVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      network: 'string',
      skillVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

