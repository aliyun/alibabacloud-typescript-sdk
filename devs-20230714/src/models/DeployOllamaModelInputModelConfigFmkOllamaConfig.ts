// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployOllamaModelInputModelConfigFmkOllamaConfig extends $dara.Model {
  minP?: number;
  mirostat?: number;
  mirostatEta?: number;
  mirostatTau?: number;
  modelName?: string;
  modelfileAdapter?: string;
  modelfileAdditionalFromsString?: string;
  modelfileFullTextPostfix?: string;
  modelfileParams?: string;
  modelfileSystem?: string;
  modelfileTemplate?: string;
  numCtx?: number;
  numPredict?: number;
  quantize?: string;
  repeatLastN?: number;
  repeatPenalty?: number;
  seed?: number;
  singleModelFile?: string;
  splitedModelStartFile?: string;
  stop?: string;
  stream?: boolean;
  temperature?: number;
  tfsZ?: number;
  topK?: number;
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      minP: 'minP',
      mirostat: 'mirostat',
      mirostatEta: 'mirostatEta',
      mirostatTau: 'mirostatTau',
      modelName: 'modelName',
      modelfileAdapter: 'modelfileAdapter',
      modelfileAdditionalFromsString: 'modelfileAdditionalFromsString',
      modelfileFullTextPostfix: 'modelfileFullTextPostfix',
      modelfileParams: 'modelfileParams',
      modelfileSystem: 'modelfileSystem',
      modelfileTemplate: 'modelfileTemplate',
      numCtx: 'numCtx',
      numPredict: 'numPredict',
      quantize: 'quantize',
      repeatLastN: 'repeatLastN',
      repeatPenalty: 'repeatPenalty',
      seed: 'seed',
      singleModelFile: 'singleModelFile',
      splitedModelStartFile: 'splitedModelStartFile',
      stop: 'stop',
      stream: 'stream',
      temperature: 'temperature',
      tfsZ: 'tfsZ',
      topK: 'topK',
      topP: 'topP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minP: 'number',
      mirostat: 'number',
      mirostatEta: 'number',
      mirostatTau: 'number',
      modelName: 'string',
      modelfileAdapter: 'string',
      modelfileAdditionalFromsString: 'string',
      modelfileFullTextPostfix: 'string',
      modelfileParams: 'string',
      modelfileSystem: 'string',
      modelfileTemplate: 'string',
      numCtx: 'number',
      numPredict: 'number',
      quantize: 'string',
      repeatLastN: 'number',
      repeatPenalty: 'number',
      seed: 'number',
      singleModelFile: 'string',
      splitedModelStartFile: 'string',
      stop: 'string',
      stream: 'boolean',
      temperature: 'number',
      tfsZ: 'number',
      topK: 'number',
      topP: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

