// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillAuthedIdentitiesResponseBodyIdentities extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic installation is enabled. Valid values:
   * 
   * - true: Automatic installation is enabled.
   * - false: Automatic installation is disabled.
   * 
   * @example
   * true
   */
  autoInstall?: boolean;
  /**
   * @remarks
   * The ID of the authorized object.
   * 
   * @example
   * ecd-b9ej3xiok4tjbgf9x****
   */
  identityId?: string;
  static names(): { [key: string]: string } {
    return {
      autoInstall: 'AutoInstall',
      identityId: 'IdentityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInstall: 'boolean',
      identityId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillAuthedIdentitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of authorized objects.
   */
  identities?: ListSkillAuthedIdentitiesResponseBodyIdentities[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5CC5E450-FC43-4F5B-B540-9964BD*****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      identities: 'Identities',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identities: { 'type': 'array', 'itemType': ListSkillAuthedIdentitiesResponseBodyIdentities },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.identities)) {
      $dara.Model.validateArray(this.identities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

