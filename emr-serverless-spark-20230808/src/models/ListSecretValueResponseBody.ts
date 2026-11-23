// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecretValueResponseBodySecrets extends $dara.Model {
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * My secret。
   */
  comment?: string;
  /**
   * @remarks
   * The secret content.
   * 
   * @example
   * password
   */
  content?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1787220243000
   */
  createTime?: number;
  /**
   * @remarks
   * The UID of the creator.
   * 
   * @example
   * 12550000006396
   */
  creator?: string;
  /**
   * @remarks
   * The nickname of the creator.
   * 
   * @example
   * admin
   */
  creatorName?: string;
  /**
   * @remarks
   * The secret name.
   * 
   * @example
   * mysecret
   */
  name?: string;
  /**
   * @remarks
   * The secret ID.
   * 
   * @example
   * st-xxxxxxxxxxxx
   */
  secretId?: string;
  /**
   * @remarks
   * The secret type. The value is fixed to secret.
   * 
   * @example
   * secret
   */
  secretType?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      content: 'content',
      createTime: 'createTime',
      creator: 'creator',
      creatorName: 'creatorName',
      name: 'name',
      secretId: 'secretId',
      secretType: 'secretType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      content: 'string',
      createTime: 'number',
      creator: 'string',
      creatorName: 'string',
      name: 'string',
      secretId: 'string',
      secretType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretValueResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 79555076-7087-59EF-A936-8C31A48AA1E2
   */
  requestId?: string;
  /**
   * @remarks
   * The list of secrets.
   */
  secrets?: ListSecretValueResponseBodySecrets[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      secrets: 'secrets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secrets: { 'type': 'array', 'itemType': ListSecretValueResponseBodySecrets },
    };
  }

  validate() {
    if(Array.isArray(this.secrets)) {
      $dara.Model.validateArray(this.secrets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

