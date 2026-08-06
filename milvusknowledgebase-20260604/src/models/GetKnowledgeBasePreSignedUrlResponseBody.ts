// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgeBasePreSignedUrlResponseBodyData extends $dara.Model {
  /**
   * @example
   * knowledgebase-fileupload
   */
  bucketName?: string;
  /**
   * @example
   * 3600
   */
  expiresIn?: number;
  preSignedUrls?: string[];
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      expiresIn: 'expiresIn',
      preSignedUrls: 'preSignedUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      expiresIn: 'number',
      preSignedUrls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.preSignedUrls)) {
      $dara.Model.validateArray(this.preSignedUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeBasePreSignedUrlResponseBody extends $dara.Model {
  /**
   * @example
   * {"PolicyType":"AccountLevelIdentityBasedPolicy","AuthPrincipalOwnerId":"1234567890123456","AuthPrincipalType":"SubUser","AuthPrincipalDisplayName":"1234567890123456","NoPermissionType":"ImplicitDeny","AuthAction":"milvusknowledgebase:ListDatasets"}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 0
   */
  code?: number;
  data?: GetKnowledgeBasePreSignedUrlResponseBodyData;
  /**
   * @example
   * 403
   */
  httpStatusCode?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      data: GetKnowledgeBasePreSignedUrlResponseBodyData,
      httpStatusCode: 'number',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

