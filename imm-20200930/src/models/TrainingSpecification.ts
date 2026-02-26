// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelSpecification } from "./ModelSpecification";
import { Runtime } from "./Runtime";
import { CustomParams } from "./CustomParams";


export class TrainingSpecification extends $dara.Model {
  /**
   * @remarks
   * Name of the dataset
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The endpoint of the storage where the dataset is stored.
   * 
   * This parameter is required.
   * 
   * @example
   * http://1111111111.mns.cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The model specification details.
   * 
   * This parameter is required.
   */
  modelSpecification?: ModelSpecification;
  /**
   * @remarks
   * The information about the runtime for model training.
   * 
   * This parameter is required.
   */
  runtime?: Runtime;
  /**
   * @remarks
   * URI of the dataset
   * 
   * This parameter is required.
   * 
   * @example
   * oss://imm-alg-dataset-bj/cifar10/test_index.json
   */
  sourceURI?: string;
  /**
   * @remarks
   * The storage path to the model data. Only an Object Storage Service (OSS) path is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://imm-alg-dataset-bj/model_training_test/
   */
  targetURI?: string;
  /**
   * @remarks
   * Local preprocessing parameters for the dataset.
   */
  transforms?: CustomParams[];
  /**
   * @remarks
   * The URI of the evaluation dataset. You must specify this parameter or the ValidationSplit parameter.
   * 
   * @example
   * oss://imm-alg-dataset-bj/cifar10/test_index.json
   */
  validationSourceURI?: string;
  /**
   * @remarks
   * The ratio for splitting the training dataset into the evaluation dataset. You must specify this parameter or the ValidationSourceURI parameter.
   * 
   * @example
   * 0.95
   */
  validationSplit?: number;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      endpoint: 'Endpoint',
      modelSpecification: 'ModelSpecification',
      runtime: 'Runtime',
      sourceURI: 'SourceURI',
      targetURI: 'TargetURI',
      transforms: 'Transforms',
      validationSourceURI: 'ValidationSourceURI',
      validationSplit: 'ValidationSplit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      endpoint: 'string',
      modelSpecification: ModelSpecification,
      runtime: Runtime,
      sourceURI: 'string',
      targetURI: 'string',
      transforms: { 'type': 'array', 'itemType': CustomParams },
      validationSourceURI: 'string',
      validationSplit: 'number',
    };
  }

  validate() {
    if(this.modelSpecification && typeof (this.modelSpecification as any).validate === 'function') {
      (this.modelSpecification as any).validate();
    }
    if(this.runtime && typeof (this.runtime as any).validate === 'function') {
      (this.runtime as any).validate();
    }
    if(Array.isArray(this.transforms)) {
      $dara.Model.validateArray(this.transforms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

