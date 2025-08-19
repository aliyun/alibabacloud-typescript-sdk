// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * This parameter is required.
   * 
   * @example
   * 181761095690****
   */
  accountId?: string;
  /**
   * @remarks
   * Specifies whether to return the information of tags. Valid values:
   * 
   * *   false (default value)
   * *   true
   * 
   * @example
   * true
   */
  includeTags?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      includeTags: 'IncludeTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      includeTags: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

