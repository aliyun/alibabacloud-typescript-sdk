// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmartqQueryAbilityRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset ID.
   * 
   * Navigate to Workbench > Datasets, open the desired dataset, and find the cubeId in the URL.
   * 
   * In multi-table scenarios, leave this parameter empty.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * The list of multiple dataset IDs.
   * The model selects one or more tables from the list based on the question to generate an answer. This parameter is required in multi-table scenarios and is not needed in single-table scenarios.
   * 
   * @example
   * 7c7****-3c744528014b,a876asd***yhashd2
   */
  multipleCubeIds?: string;
  /**
   * @remarks
   * The user ID.
   * >Notice: If this parameter is not specified, data is queried as the organization owner by default.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  userId?: string;
  /**
   * @remarks
   * The question text.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  userQuestion?: string;
  static names(): { [key: string]: string } {
    return {
      cubeId: 'CubeId',
      multipleCubeIds: 'MultipleCubeIds',
      userId: 'UserId',
      userQuestion: 'UserQuestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeId: 'string',
      multipleCubeIds: 'string',
      userId: 'string',
      userQuestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

