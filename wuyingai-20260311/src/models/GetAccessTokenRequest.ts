// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the user in the external system.
   * 
   * @example
   * "user-38764"
   */
  externalUserId?: string;
  /**
   * @remarks
   * The ID of the agent template.
   * 
   * @example
   * 1600112233445566
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      externalUserId: 'ExternalUserId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalUserId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

