// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmartqQueryAbilityRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dataset. To obtain the ID, navigate to \\*\\*Workbench\\*\\* > \\*\\*Dataset\\*\\* in the Quick BI console. Open the dataset and find the \\`cubeId\\` in the URL.
   * 
   * In multi-table scenarios, this parameter must be empty.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  cubeId?: string;
  /**
   * @remarks
   * A list of dataset IDs. The model selects one or more tables from the list to generate an answer based on the question. This parameter is required for multi-table scenarios and is not used for single-table scenarios.
   * 
   * @example
   * 7c7****-3c744528014b,a876asd***yhashd2
   */
  multipleCubeIds?: string;
  /**
   * @remarks
   * The ID of the user.
   * >Notice: If you do not specify this parameter, data is queried as the organization owner by default.
   * 
   * @example
   * 7c7223ae-****-3c744528014b
   */
  userId?: string;
  /**
   * @remarks
   * The question in text format.
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

