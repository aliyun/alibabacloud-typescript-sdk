// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImportableKMSSecretsForHostResponseBodySecrets extends $dara.Model {
  /**
   * @example
   * test1
   */
  secretName?: string;
  /**
   * @example
   * ECS
   */
  secretType?: string;
  /**
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
   * @example
   * 20
   */
  maxResults?: number;
  /**
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

