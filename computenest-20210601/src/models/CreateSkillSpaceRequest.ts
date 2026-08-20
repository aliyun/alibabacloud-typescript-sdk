// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSkillSpaceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The value of ClientToken can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the SkillSpace.
   * 
   * This parameter is required.
   * 
   * @example
   * All-in-one office toolkit — generate reports, process data, manage files, and streamline workflows effortlessly.
   */
  skillSpaceDescription?: string;
  /**
   * @remarks
   * The name of the SkillSpace.
   * 
   * This parameter is required.
   * 
   * @example
   * office-toolkit-skills
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

