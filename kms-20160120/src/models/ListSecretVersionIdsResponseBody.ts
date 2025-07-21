// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecretVersionIdsResponseBodyVersionIdsVersionIdVersionStages extends $dara.Model {
  versionStage?: string[];
  static names(): { [key: string]: string } {
    return {
      versionStage: 'VersionStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionStage: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.versionStage)) {
      $dara.Model.validateArray(this.versionStage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretVersionIdsResponseBodyVersionIdsVersionId extends $dara.Model {
  /**
   * @remarks
   * The time when the secret version was created.
   * 
   * @example
   * 2020-02-21T15:39:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 00000000000000000000000000000000203
   */
  versionId?: string;
  /**
   * @remarks
   * The stage labels that mark the secret version.
   */
  versionStages?: ListSecretVersionIdsResponseBodyVersionIdsVersionIdVersionStages;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      versionId: 'VersionId',
      versionStages: 'VersionStages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      versionId: 'string',
      versionStages: ListSecretVersionIdsResponseBodyVersionIdsVersionIdVersionStages,
    };
  }

  validate() {
    if(this.versionStages && typeof (this.versionStages as any).validate === 'function') {
      (this.versionStages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretVersionIdsResponseBodyVersionIds extends $dara.Model {
  versionId?: ListSecretVersionIdsResponseBodyVersionIdsVersionId[];
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: { 'type': 'array', 'itemType': ListSecretVersionIdsResponseBodyVersionIdsVersionId },
    };
  }

  validate() {
    if(Array.isArray(this.versionId)) {
      $dara.Model.validateArray(this.versionId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretVersionIdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 5b75d8b1-5b6a-4ec0-8e0c-c08befdfad47
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of secret versions.
   */
  versionIds?: ListSecretVersionIdsResponseBodyVersionIds;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      secretName: 'SecretName',
      totalCount: 'TotalCount',
      versionIds: 'VersionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      secretName: 'string',
      totalCount: 'number',
      versionIds: ListSecretVersionIdsResponseBodyVersionIds,
    };
  }

  validate() {
    if(this.versionIds && typeof (this.versionIds as any).validate === 'function') {
      (this.versionIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

