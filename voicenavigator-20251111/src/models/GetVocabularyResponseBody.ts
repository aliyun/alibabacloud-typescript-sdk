// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVocabularyResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1773453676000
   */
  createdTime?: number;
  description?: string;
  /**
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  name?: string;
  /**
   * @example
   * 1308144684576655
   */
  tenantId?: string;
  /**
   * @example
   * 1773453676000
   */
  updatedTime?: number;
  /**
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66b
   */
  vocabularyId?: string;
  /**
   * @example
   * 50
   */
  wordCount?: string;
  words?: string;
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
      words: 'Words',
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
      wordCount: 'string',
      words: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVocabularyResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetVocabularyResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
  params?: string[];
  /**
   * @example
   * 97E7ED13-6884-52D7-B97E-C780D7870680
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
      data: GetVocabularyResponseBodyData,
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

