// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSkillRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotence of the request. Generate a value from your client that is unique across different requests. **ClientToken** supports only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Skill  ID
   * 
   * This parameter is required.
   * 
   * @example
   * s-xxxxx
   */
  skillId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      skillId: 'SkillId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

