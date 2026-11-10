// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelParametersResponseFormatJsonSchema extends $dara.Model {
  /**
   * @remarks
   * The schema name.
   * 
   * @example
   * answer
   */
  name?: string;
  /**
   * @remarks
   * The JSON Schema definition, which is a serialized string of a JSON object.
   * 
   * @example
   * {"type":"object","properties":{"answer":{"type":"string"}},"required":["answer"]}
   */
  schema?: string;
  /**
   * @remarks
   * Specifies whether to strictly adhere to the schema structure. Set this to true.
   * 
   * @example
   * true
   */
  strict?: boolean;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      schema: 'schema',
      strict: 'strict',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      schema: 'string',
      strict: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelParametersResponseFormat extends $dara.Model {
  /**
   * @remarks
   * The JSON Schema constraint, which is required when the type is json_schema.
   * 
   * @example
   * {"name":"answer","strict":true,"schema":"{\\"type\\":\\"object\\",\\"properties\\":{\\"answer\\":{\\"type\\":\\"string\\"}},\\"required\\":[\\"answer\\"]}"}
   */
  jsonSchema?: ModelParametersResponseFormatJsonSchema;
  /**
   * @remarks
   * The format type. Valid values: text, json_object, and json_schema. When using json_object, the prompt must explicitly request JSON output.
   * 
   * @example
   * json_object
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jsonSchema: 'jsonSchema',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonSchema: ModelParametersResponseFormatJsonSchema,
      type: 'string',
    };
  }

  validate() {
    if(this.jsonSchema && typeof (this.jsonSchema as any).validate === 'function') {
      (this.jsonSchema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelParameters extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable explicit caching for system messages.
   * 
   * @example
   * true
   */
  enableCacheControl?: boolean;
  /**
   * @remarks
   * Specifies whether to enable thinking mode. This takes effect only for hybrid thinking models and defaults to false if not specified.
   * 
   * @example
   * true
   */
  enableThinking?: boolean;
  /**
   * @remarks
   * The extended parameters, which are a serialized string of a JSON object. These are merged into the top level of the model request body to pass through other Model Studio parameters.
   * 
   * @example
   * {"enable_search":false}
   */
  extraBody?: string;
  /**
   * @remarks
   * The frequency penalty where positive values reduce repetition, with a range of -2.0 to 2.0.
   * 
   * @example
   * 0.2
   */
  frequencyPenalty?: number;
  /**
   * @remarks
   * The maximum number of output tokens, including the chain-of-thought and the response. This is recommended for thinking models.
   * 
   * @example
   * 4096
   */
  maxCompletionTokens?: number;
  /**
   * @remarks
   * The maximum number of output tokens.
   * 
   * @example
   * 1024
   */
  maxTokens?: number;
  /**
   * @remarks
   * The presence penalty where positive values encourage new topics, with a range of -2.0 to 2.0.
   * 
   * @example
   * 0.1
   */
  presencePenalty?: number;
  /**
   * @remarks
   * The reasoning effort level. This takes effect only when thinking mode is enabled. For the Qwen3.8 series, valid values are low, medium, and xhigh. This cannot be set simultaneously with thinkingBudget.
   * 
   * @example
   * low
   */
  reasoningEffort?: string;
  /**
   * @remarks
   * The repetition penalty that controls the repetition of consecutive sequences. The value must be greater than 0. A value of 1.0 indicates no penalty, and a larger value results in less repetition.
   * 
   * @example
   * 1.05
   */
  repetitionPenalty?: number;
  /**
   * @remarks
   * The response content format, which defaults to text if not specified.
   * 
   * @example
   * {"type":"json_schema","jsonSchema":{"name":"answer","strict":true,"schema":"{\\"type\\":\\"object\\",\\"properties\\":{\\"answer\\":{\\"type\\":\\"string\\"}},\\"required\\":[\\"answer\\"]}"}}
   */
  responseFormat?: ModelParametersResponseFormat;
  /**
   * @remarks
   * The random seed, with a range of 0 to 2147483647, which attempts to return the same result for the same input and parameters.
   * 
   * @example
   * 1234
   */
  seed?: number;
  /**
   * @remarks
   * The stop sequences that immediately halt generation when encountered.
   * 
   * @example
   * ["END"]
   */
  stopSequences?: string[];
  /**
   * @remarks
   * The temperature parameter that controls the randomness of the output, with a range of 0 to 2.
   * 
   * @example
   * 0.7
   */
  temperature?: number;
  /**
   * @remarks
   * The maximum number of tokens for the thinking process. This takes effect only when thinking mode is enabled and cannot be set simultaneously with reasoningEffort.
   * 
   * @example
   * 2048
   */
  thinkingBudget?: number;
  /**
   * @remarks
   * The Top K sampling parameter, with a range of 1 to 100.
   * 
   * @example
   * 50
   */
  topK?: number;
  /**
   * @remarks
   * The Top P sampling parameter, with a range of 0 to 1.
   * 
   * @example
   * 0.9
   */
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      enableCacheControl: 'enableCacheControl',
      enableThinking: 'enableThinking',
      extraBody: 'extraBody',
      frequencyPenalty: 'frequencyPenalty',
      maxCompletionTokens: 'maxCompletionTokens',
      maxTokens: 'maxTokens',
      presencePenalty: 'presencePenalty',
      reasoningEffort: 'reasoningEffort',
      repetitionPenalty: 'repetitionPenalty',
      responseFormat: 'responseFormat',
      seed: 'seed',
      stopSequences: 'stopSequences',
      temperature: 'temperature',
      thinkingBudget: 'thinkingBudget',
      topK: 'topK',
      topP: 'topP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCacheControl: 'boolean',
      enableThinking: 'boolean',
      extraBody: 'string',
      frequencyPenalty: 'number',
      maxCompletionTokens: 'number',
      maxTokens: 'number',
      presencePenalty: 'number',
      reasoningEffort: 'string',
      repetitionPenalty: 'number',
      responseFormat: ModelParametersResponseFormat,
      seed: 'number',
      stopSequences: { 'type': 'array', 'itemType': 'string' },
      temperature: 'number',
      thinkingBudget: 'number',
      topK: 'number',
      topP: 'number',
    };
  }

  validate() {
    if(this.responseFormat && typeof (this.responseFormat as any).validate === 'function') {
      (this.responseFormat as any).validate();
    }
    if(Array.isArray(this.stopSequences)) {
      $dara.Model.validateArray(this.stopSequences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

