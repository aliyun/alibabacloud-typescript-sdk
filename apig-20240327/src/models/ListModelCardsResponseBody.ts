// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelCardsResponseBodyDataAvailablePaths extends $dara.Model {
  /**
   * @remarks
   * The request path of the API.
   * 
   * @example
   * /v1/chat/completions
   */
  path?: string;
  /**
   * @remarks
   * The type identifier of the available path record. The set of valid values is not declared in the API definition.
   * 
   * @example
   * type-xxxxxxxx
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'path',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelCardsResponseBodyDataMeta extends $dara.Model {
  /**
   * @remarks
   * The description text of the model card.
   * 
   * @example
   * Sample description text for the model card
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelCardsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of available paths for the model card. Each element consists of the path and type members. The criteria for availability are not specified in the API definition.
   */
  availablePaths?: ListModelCardsResponseBodyDataAvailablePaths[];
  /**
   * @remarks
   * The feature configuration of the model card as a key-value map. The set of keys is not declared in the API definition.
   * 
   * @example
   * {"functionCall":true}
   */
  features?: { [key: string]: any };
  /**
   * @remarks
   * The metadata container of the model card. Only the description member is declared in the API definition.
   */
  meta?: ListModelCardsResponseBodyDataMeta;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen-plus
   */
  modelName?: string;
  /**
   * @remarks
   * The pricing information of the model card as a key-value map. The set of keys and the billing criteria are not declared in the API definition.
   * 
   * @example
   * {"input":0.004,"output":0.012}
   */
  pricing?: { [key: string]: any };
  /**
   * @remarks
   * The model provider identifier corresponding to the model card.
   * 
   * @example
   * provider-xxxxxxxx
   */
  provider?: string;
  /**
   * @remarks
   * The list of snapshots for the model card. Array items are map structures with undeclared members. The snapshot content and generation rules are not specified in the API definition.
   */
  snapshots?: { [key: string]: any }[];
  /**
   * @remarks
   * The source identifier of the model card. The set of valid values is not declared in the API definition.
   * 
   * @example
   * source-xxxxxxxx
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      availablePaths: 'availablePaths',
      features: 'features',
      meta: 'meta',
      modelName: 'modelName',
      pricing: 'pricing',
      provider: 'provider',
      snapshots: 'snapshots',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availablePaths: { 'type': 'array', 'itemType': ListModelCardsResponseBodyDataAvailablePaths },
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      meta: ListModelCardsResponseBodyDataMeta,
      modelName: 'string',
      pricing: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      provider: 'string',
      snapshots: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      source: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availablePaths)) {
      $dara.Model.validateArray(this.availablePaths);
    }
    if(this.features) {
      $dara.Model.validateMap(this.features);
    }
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
    }
    if(this.pricing) {
      $dara.Model.validateMap(this.pricing);
    }
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelCardsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListModelCardsResponseBodyData[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListModelCardsResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

