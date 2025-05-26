// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelSpecification } from "./ModelSpecification";
import { Runtime } from "./Runtime";
import { CustomParams } from "./CustomParams";


export class TrainingSpecification extends $dara.Model {
  datasetName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  modelSpecification?: ModelSpecification;
  /**
   * @remarks
   * This parameter is required.
   */
  runtime?: Runtime;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://imm-alg-dataset-bj/cifar10/test_index.json
   */
  sourceURI?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://imm-alg-dataset-bj/model_training_test/
   */
  targetURI?: string;
  transforms?: CustomParams[];
  /**
   * @example
   * oss://imm-alg-dataset-bj/cifar10/test_index.json
   */
  validationSourceURI?: string;
  /**
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

