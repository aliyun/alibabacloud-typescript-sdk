// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSkillSpaceRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token to ensure the idempotence of the request. The value must be unique for each request. The **ClientToken** supports only ASCII characters and can be up to 64 characters long.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the SkillSpace.
   * 
   * This parameter is required.
   * 
   * @example
   * ss-11111111111
   */
  skillSpaceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      skillSpaceId: 'SkillSpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      skillSpaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

