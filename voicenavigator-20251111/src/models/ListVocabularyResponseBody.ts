// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVocabularyResponseBodyDataVocabularies extends $dara.Model {
  /**
   * @remarks
   * The time the vocabulary was created.
   * 
   * @example
   * 1754013825102
   */
  createdTime?: number;
  /**
   * @remarks
   * The description of the vocabulary.
   * 
   * @example
   * 包含金融场景专业术语
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the vocabulary.
   * 
   * @example
   * 金融场景热词
   */
  name?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 1308144684576655
   */
  tenantId?: string;
  /**
   * @remarks
   * The time the vocabulary was last updated.
   * 
   * @example
   * 1754013825102
   */
  updatedTime?: number;
  /**
   * @remarks
   * The ID of the vocabulary.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66b
   */
  vocabularyId?: string;
  /**
   * @remarks
   * The number of words in the vocabulary.
   * 
   * @example
   * 50
   */
  wordCount?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      tenantId: 'TenantId',
      updatedTime: 'UpdatedTime',
      vocabularyId: 'VocabularyId',
      wordCount: 'WordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      tenantId: 'string',
      updatedTime: 'number',
      vocabularyId: 'string',
      wordCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVocabularyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * A list of vocabularies.
   */
  vocabularies?: ListVocabularyResponseBodyDataVocabularies[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      vocabularies: 'Vocabularies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      vocabularies: { 'type': 'array', 'itemType': ListVocabularyResponseBodyDataVocabularies },
    };
  }

  validate() {
    if(Array.isArray(this.vocabularies)) {
      $dara.Model.validateArray(this.vocabularies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVocabularyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The paginated list of vocabularies.
   */
  data?: ListVocabularyResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The list of dynamic error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DB8BA95-4513-54B9-9C67-A28909CFB4AD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListVocabularyResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

