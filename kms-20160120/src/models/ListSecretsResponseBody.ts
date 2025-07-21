// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecretsResponseBodySecretListSecretTagsTag extends $dara.Model {
  /**
   * @example
   * key1
   */
  tagKey?: string;
  /**
   * @example
   * val1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBodySecretListSecretTags extends $dara.Model {
  tag?: ListSecretsResponseBodySecretListSecretTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListSecretsResponseBodySecretListSecretTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBodySecretListSecret extends $dara.Model {
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 2022-07-17T07:59:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The resource tags of the secret.
   * 
   * This parameter is not returned if you set the FetchTags parameter to false or do not specify the FetchTags parameter.
   * 
   * @example
   * 2022-08-17T07:59:05Z
   */
  plannedDeleteTime?: string;
  /**
   * @remarks
   * The type of the secret. Valid values:
   * 
   * *   Generic: indicates a generic secret.
   * *   Rds: indicates a managed ApsaraDB RDS secret.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The time when the secret was created.
   * 
   * @example
   * Generic
   */
  secretType?: string;
  /**
   * @remarks
   * The tag key.
   */
  tags?: ListSecretsResponseBodySecretListSecretTags;
  /**
   * @remarks
   * The time when the secret is scheduled to be deleted.
   * 
   * @example
   * 2022-07-17T07:59:05Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      plannedDeleteTime: 'PlannedDeleteTime',
      secretName: 'SecretName',
      secretType: 'SecretType',
      tags: 'Tags',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      plannedDeleteTime: 'string',
      secretName: 'string',
      secretType: 'string',
      tags: ListSecretsResponseBodySecretListSecretTags,
      updateTime: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBodySecretList extends $dara.Model {
  secret?: ListSecretsResponseBodySecretListSecret[];
  static names(): { [key: string]: string } {
    return {
      secret: 'Secret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secret: { 'type': 'array', 'itemType': ListSecretsResponseBodySecretListSecret },
    };
  }

  validate() {
    if(Array.isArray(this.secret)) {
      $dara.Model.validateArray(this.secret);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of returned secrets.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of secrets.
   * 
   * @example
   * 6a6287a0-ff34-4780-a790-fdfca900557f
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the secret was updated.
   */
  secretList?: ListSecretsResponseBodySecretList;
  /**
   * @remarks
   * The secret name.
   * 
   * @example
   * 55
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      secretList: 'SecretList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      secretList: ListSecretsResponseBodySecretList,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.secretList && typeof (this.secretList as any).validate === 'function') {
      (this.secretList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

