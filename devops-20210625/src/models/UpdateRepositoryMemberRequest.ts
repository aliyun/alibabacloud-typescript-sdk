// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRepositoryMemberRequestRelatedInfos extends $dara.Model {
  /**
   * @example
   * 10011
   */
  relatedId?: string;
  /**
   * @example
   * 24790
   */
  sourceId?: number;
  /**
   * @example
   * Project
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      relatedId: 'relatedId',
      sourceId: 'sourceId',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedId: 'string',
      sourceId: 'number',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryMemberRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @example
   * 30
   */
  accessLevel?: number;
  /**
   * @example
   * 2020-08-08 08:08:08
   */
  expireAt?: string;
  /**
   * @example
   * USERS
   */
  memberType?: string;
  /**
   * @example
   * 10010
   */
  relatedId?: string;
  relatedInfos?: UpdateRepositoryMemberRequestRelatedInfos[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60de7a6852743a5162b5f957
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      accessLevel: 'accessLevel',
      expireAt: 'expireAt',
      memberType: 'memberType',
      relatedId: 'relatedId',
      relatedInfos: 'relatedInfos',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      accessLevel: 'number',
      expireAt: 'string',
      memberType: 'string',
      relatedId: 'string',
      relatedInfos: { 'type': 'array', 'itemType': UpdateRepositoryMemberRequestRelatedInfos },
      organizationId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.relatedInfos)) {
      $dara.Model.validateArray(this.relatedInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

