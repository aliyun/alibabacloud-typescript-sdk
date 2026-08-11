// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloneVoiceModelsResponseBodyDataCloneVoiceModels extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Responsive, adaptive tone adjustment, effective complex text processing
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * Qwen
   */
  displayName?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * QwenVc
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
   * The list of voice cloning models.
   */
  cloneVoiceModels?: ListCloneVoiceModelsResponseBodyDataCloneVoiceModels[];
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records that match the conditions.
   * 
   * @example
   * 0
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
   * The return code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
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
   * The error message.
   * 
   * @example
   * Instance does not exist. Instance=392db13c-8901-4a25-b566-91d0d8114cec
   */
  message?: string;
  /**
   * @remarks
   * The list of variable values in the error message.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FDAC7-13C5-1B64-A853-999DF105B9EF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
      success: 'Success',
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
      success: 'boolean',
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

