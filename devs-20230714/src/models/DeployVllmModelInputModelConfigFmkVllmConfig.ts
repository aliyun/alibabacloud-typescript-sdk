// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployVllmModelInputModelConfigFmkVllmConfig extends $dara.Model {
  apiKey?: string;
  blockSize?: number;
  chatTemplate?: string;
  dtype?: string;
  fullTextPostfix?: string;
  gpuMemoryUtilization?: number;
  loadFormat?: string;
  maxModelLen?: number;
  maxParallelLoadingWorkers?: number;
  quantization?: string;
  servedModelName?: string;
  swapSpace?: number;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      blockSize: 'blockSize',
      chatTemplate: 'chatTemplate',
      dtype: 'dtype',
      fullTextPostfix: 'fullTextPostfix',
      gpuMemoryUtilization: 'gpuMemoryUtilization',
      loadFormat: 'loadFormat',
      maxModelLen: 'maxModelLen',
      maxParallelLoadingWorkers: 'maxParallelLoadingWorkers',
      quantization: 'quantization',
      servedModelName: 'servedModelName',
      swapSpace: 'swapSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      blockSize: 'number',
      chatTemplate: 'string',
      dtype: 'string',
      fullTextPostfix: 'string',
      gpuMemoryUtilization: 'number',
      loadFormat: 'string',
      maxModelLen: 'number',
      maxParallelLoadingWorkers: 'number',
      quantization: 'string',
      servedModelName: 'string',
      swapSpace: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

