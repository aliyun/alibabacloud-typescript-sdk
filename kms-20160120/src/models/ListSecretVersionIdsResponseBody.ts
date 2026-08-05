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
  createTime?: string;
  versionId?: string;
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
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size of the current page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request and can be used to troubleshoot issues.
   * 
   * @example
   * 5b75d8b1-5b6a-4ec0-8e0c-c08befdfad47
   */
  requestId?: string;
  /**
   * @remarks
   * The secret name.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
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

