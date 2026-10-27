// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloneVoiceModelsResponseBodyDataCloneVoiceModels extends $dara.Model {
  /**
   * @remarks
   * The description of the model.
   * 
   * @example
   * 口音还原相似度高、韵律流畅
   */
  description?: string;
  /**
   * @remarks
   * The display name of the model.
   * 
   * @example
   * CosyVoice
   */
  displayName?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * CosyVoice
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloneVoiceModelsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of clone voice models.
   */
  cloneVoiceModels?: ListCloneVoiceModelsResponseBodyDataCloneVoiceModels[];
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
   * The number of entries on the current page.
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
   * 66
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloneVoiceModels: 'CloneVoiceModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneVoiceModels: { 'type': 'array', 'itemType': ListCloneVoiceModelsResponseBodyDataCloneVoiceModels },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloneVoiceModels)) {
      $dara.Model.validateArray(this.cloneVoiceModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloneVoiceModelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the request. A value of "OK" indicates success.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The paginated data.
   */
  data?: ListCloneVoiceModelsResponseBodyData;
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
   * The detailed message returned for the request. It provides more context about the status code.
   * 
   * @example
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
  /**
   * @remarks
   * A list of dynamic error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The unique ID generated for the request.
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
      data: ListCloneVoiceModelsResponseBodyData,
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

