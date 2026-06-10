// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillSpaceRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11111
   */
  skillSpaceDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 11111
   */
  skillSpaceName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      skillSpaceDescription: 'SkillSpaceDescription',
      skillSpaceName: 'SkillSpaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      skillSpaceDescription: 'string',
      skillSpaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

