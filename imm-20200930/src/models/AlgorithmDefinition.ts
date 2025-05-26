// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainingSpecification } from "./TrainingSpecification";


export class AlgorithmDefinition extends $dara.Model {
  /**
   * @example
   * 8fc6e718-8d19-495f-a510-bcee3c598588
   */
  algorithmDefinitionId?: string;
  /**
   * @example
   * 2023-05-31T10:19:40.572325888+08:00
   */
  createTime?: string;
  customLabels?: { [key: string]: string }[];
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * algoName
   */
  name?: string;
  /**
   * @example
   * user1
   */
  ownerId?: string;
  /**
   * @example
   * traningtest
   */
  projectName?: string;
  trainingSpecification?: TrainingSpecification;
  /**
   * @example
   * 2023-05-31T10:19:40.572325888+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmDefinitionId: 'AlgorithmDefinitionId',
      createTime: 'CreateTime',
      customLabels: 'CustomLabels',
      description: 'Description',
      name: 'Name',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      trainingSpecification: 'TrainingSpecification',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmDefinitionId: 'string',
      createTime: 'string',
      customLabels: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      description: 'string',
      name: 'string',
      ownerId: 'string',
      projectName: 'string',
      trainingSpecification: TrainingSpecification,
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customLabels)) {
      $dara.Model.validateArray(this.customLabels);
    }
    if(this.trainingSpecification && typeof (this.trainingSpecification as any).validate === 'function') {
      (this.trainingSpecification as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

