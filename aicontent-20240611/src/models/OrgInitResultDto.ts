// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrgInitResultDTO extends $dara.Model {
  /**
   * @example
   * sk-xxxxxxxxxxxxxx
   */
  apiKey?: string;
  /**
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @example
   * st-xxxx
   */
  clientUuid?: string;
  /**
   * @example
   * true
   */
  isNew?: boolean;
  /**
   * @example
   * 1
   */
  orgId?: number;
  /**
   * @example
   * 1
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      clientId: 'clientId',
      clientUuid: 'clientUuid',
      isNew: 'isNew',
      orgId: 'orgId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      clientId: 'number',
      clientUuid: 'string',
      isNew: 'boolean',
      orgId: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

