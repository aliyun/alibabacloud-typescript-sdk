// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImportableKMSSecretsForHostResponseBodySecrets extends $dara.Model {
  /**
   * @remarks
   * The name of the credential.
   * 
   * @example
   * test1
   */
  secretName?: string;
  /**
   * @remarks
   * The type of the credential. Valid values:
   * 
   * - ECS: ECS credential.
   * 
   * @example
   * ECS
   */
  secretType?: string;
  /**
   * @remarks
   * The tags of the credential.
   * 
   * @example
   * test
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      secretType: 'SecretType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
      secretType: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImportableKMSSecretsForHostResponseBody extends $dara.Model {
  /**
   * @remarks
   * If a valid MaxResults value is passed in the request parameter, the specified parameter value is returned. Otherwise, the default value is returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * 4ieSWJCwxvW3dk3wF.BqkrZmP72nWu5zJ5NWydMqyEs****
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The credential information.
   */
  secrets?: ListImportableKMSSecretsForHostResponseBodySecrets[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      secrets: 'Secrets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      secrets: { 'type': 'array', 'itemType': ListImportableKMSSecretsForHostResponseBodySecrets },
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

