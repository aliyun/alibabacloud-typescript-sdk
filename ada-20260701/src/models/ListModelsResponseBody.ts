// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelsResponseBodyModelsCapabilities extends $dara.Model {
  /**
   * @remarks
   * The supported input modalities. For text sessions, select a model that includes text.
   * 
   * @example
   * ["text"]
   */
  inputModalities?: string[];
  static names(): { [key: string]: string } {
    return {
      inputModalities: 'InputModalities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputModalities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.inputModalities)) {
      $dara.Model.validateArray(this.inputModalities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBodyModels extends $dara.Model {
  /**
   * @remarks
   * The model capabilities structure.
   * 
   * @example
   * {"InputModalities":["text"]}
   */
  capabilities?: ListModelsResponseBodyModelsCapabilities;
  /**
   * @remarks
   * **[Deprecated]** The legacy compatibility field. It is no longer returned. Do not use it as a dependency for integration.
   * 
   * @example
   * 32768
   * 
   * @deprecated
   */
  contextWindow?: number;
  /**
   * @remarks
   * The time when the model was created. It is a UNIX timestamp in seconds.
   * 
   * @example
   * 1793491200
   */
  created?: number;
  /**
   * @remarks
   * The credit coefficient of the model, returned as a decimal string. Not returned if not configured.
   * 
   * @example
   * 2.5
   */
  creditsCoefficient?: string;
  /**
   * @remarks
   * The display name of the model. Do not pass it as the model identifier.
   * 
   * @example
   * Sample text model
   */
  displayName?: string;
  /**
   * @remarks
   * The model identifier. Used as Params.modelId for SetAgentSessionModel. Use the actual returned value.
   * 
   * @example
   * text-model-example
   */
  id?: string;
  /**
   * @remarks
   * **[Deprecated]** The legacy compatibility field. It is no longer returned. Do not use it as a dependency for integration.
   * 
   * @example
   * 131072
   * 
   * @deprecated
   */
  maxContextWindow?: number;
  /**
   * @remarks
   * The object type. Fixed to model.
   * 
   * @example
   * model
   */
  object?: string;
  /**
   * @remarks
   * The identifier of the model provider.
   * 
   * @example
   * provider-example
   */
  ownedBy?: string;
  /**
   * @remarks
   * **[Deprecated]** The legacy compatibility field. It is no longer returned. Use ThinkingLevels instead.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  supportsThinking?: number;
  /**
   * @remarks
   * The default thinking level in the model catalog. It does not represent the current value of the session. Query the current value by using GetAgentSessionModel.
   * 
   * @example
   * off
   */
  thinkingLevel?: string;
  /**
   * @remarks
   * The thinking levels supported by the model. An empty array does not mean all levels are supported. The target session still needs to be verified.
   * 
   * @example
   * ["off","low","medium","high"]
   */
  thinkingLevels?: string[];
  /**
   * @remarks
   * **[Deprecated]** The legacy compatibility field. It is no longer returned. Use ThinkingLevel instead.
   * 
   * @example
   * 0
   * 
   * @deprecated
   */
  thinkingMode?: number;
  static names(): { [key: string]: string } {
    return {
      capabilities: 'Capabilities',
      contextWindow: 'ContextWindow',
      created: 'Created',
      creditsCoefficient: 'CreditsCoefficient',
      displayName: 'DisplayName',
      id: 'Id',
      maxContextWindow: 'MaxContextWindow',
      object: 'Object',
      ownedBy: 'OwnedBy',
      supportsThinking: 'SupportsThinking',
      thinkingLevel: 'ThinkingLevel',
      thinkingLevels: 'ThinkingLevels',
      thinkingMode: 'ThinkingMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilities: ListModelsResponseBodyModelsCapabilities,
      contextWindow: 'number',
      created: 'number',
      creditsCoefficient: 'string',
      displayName: 'string',
      id: 'string',
      maxContextWindow: 'number',
      object: 'string',
      ownedBy: 'string',
      supportsThinking: 'number',
      thinkingLevel: 'string',
      thinkingLevels: { 'type': 'array', 'itemType': 'string' },
      thinkingMode: 'number',
    };
  }

  validate() {
    if(this.capabilities && typeof (this.capabilities as any).validate === 'function') {
      (this.capabilities as any).validate();
    }
    if(Array.isArray(this.thinkingLevels)) {
      $dara.Model.validateArray(this.thinkingLevels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results used for this pagination. If not paginated, it is the total number of results. It is not the actual number of entries returned on this page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The array of model structures. For nested fields, refer to the supplementary description of response parameters.
   * 
   * @example
   * [{"Id":"text-model-example","Object":"model","Created":1793491200,"OwnedBy":"provider-example","DisplayName":"Sample text model","Capabilities":{"InputModalities":["text"]},"CreditsCoefficient":"2.5","ThinkingLevels":["off","low","medium","high"],"ThinkingLevel":"off"}]
   */
  models?: ListModelsResponseBodyModels[];
  /**
   * @remarks
   * The token for the next page. An empty value indicates that there is no next page.
   * 
   * @example
   * next-token-example
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request. It is used for troubleshooting.
   * 
   * @example
   * 0A1B2C3D-4E5F-6789-ABCD-EF0123456789
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of models that meet the filter conditions.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      models: 'Models',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      models: { 'type': 'array', 'itemType': ListModelsResponseBodyModels },
      nextToken: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

