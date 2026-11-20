// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OrgInitResultDTO extends $dara.Model {
  /**
   * @remarks
   * The returned plaintext API key, which is visible only once during initialization.
   * 
   * @example
   * sk-xxxxxxxxxxxxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The customer ID.
   * 
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * The customer unique identifier.
   * 
   * @example
   * st-xxxx
   */
  clientUuid?: string;
  /**
   * @remarks
   * Indicates whether it is newly created. A value of false indicates that it already exists.
   * 
   * @example
   * true
   */
  isNew?: boolean;
  /**
   * @remarks
   * The enterprise ID.
   * 
   * @example
   * 1
   */
  orgId?: number;
  /**
   * @remarks
   * The user ID.
   * 
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

