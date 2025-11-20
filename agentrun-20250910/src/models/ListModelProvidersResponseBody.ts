// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelInfoConfig } from "./ModelInfoConfig";


export class ListModelProvidersResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * baseUrl
   * 
   * @example
   * baseUrl
   */
  baseUrl?: string;
  /**
   * @remarks
   * modelInfoConfig
   */
  modelInfoConfig?: ModelInfoConfig;
  /**
   * @example
   * native
   */
  modelType?: string;
  models?: string[];
  /**
   * @example
   * providerName
   */
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      baseUrl: 'baseUrl',
      modelInfoConfig: 'modelInfoConfig',
      modelType: 'modelType',
      models: 'models',
      providerName: 'providerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseUrl: 'string',
      modelInfoConfig: ModelInfoConfig,
      modelType: 'string',
      models: { 'type': 'array', 'itemType': 'string' },
      providerName: 'string',
    };
  }

  validate() {
    if(this.modelInfoConfig && typeof (this.modelInfoConfig as any).validate === 'function') {
      (this.modelInfoConfig as any).validate();
    }
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelProvidersResponseBodyData extends $dara.Model {
  items?: ListModelProvidersResponseBodyDataItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 211
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListModelProvidersResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelProvidersResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  data?: ListModelProvidersResponseBodyData;
  /**
   * @example
   * F8A0F5F3-0C3E-4C82-9D4F-5E4B6A7C8D9E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListModelProvidersResponseBodyData,
      requestId: 'string',
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

