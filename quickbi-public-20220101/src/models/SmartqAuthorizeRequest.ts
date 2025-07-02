// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmartqAuthorizeRequest extends $dara.Model {
  /**
   * @remarks
   * Array of dataset IDs, separated by English commas. <notice>This parameter will be converted to the corresponding question resource ID for authorization. Therefore, if the input cubeId does not correspond to any question resource, an error indicating that the question resource does not exist will be reported. Please ensure the correctness of the cubeId.</notice>
   * 
   * @example
   * wasdasd*******1235235sd,ASDAS*********ASDAW123
   */
  cubeIds?: string;
  /**
   * @remarks
   * Expiration time, with a default of seven days.
   * Format: 2099-12-31
   * 
   * @example
   * 2099-12-31
   */
  expireDay?: string;
  /**
   * @remarks
   * Array of analysis theme IDs, separated by English commas.
   * 
   * @example
   * wasdasd*******1235235sd,ASDAS*********ASDAW123
   */
  llmCubeThemes?: string;
  /**
   * @remarks
   * Array of Q&A resource IDs, separated by English commas.
   * 
   * @example
   * wasdasd*******1235235sd,ASDAS*********ASDAW123
   */
  llmCubes?: string;
  /**
   * @remarks
   * Operation type. The values are as follows:
   * - 0: Add authorization
   * - 1: Remove authorization
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  operationType?: number;
  /**
   * @remarks
   * Array of user IDs, separated by English commas.
   * >Notice: The number of user IDs per request * (number of Q&A resources + number of analysis themes) cannot exceed 100.
   * 
   * This parameter is required.
   * 
   * @example
   * wasdasd*******1235235sd,ASDAS*********ASDAW123
   */
  userIds?: string;
  static names(): { [key: string]: string } {
    return {
      cubeIds: 'CubeIds',
      expireDay: 'ExpireDay',
      llmCubeThemes: 'LlmCubeThemes',
      llmCubes: 'LlmCubes',
      operationType: 'OperationType',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeIds: 'string',
      expireDay: 'string',
      llmCubeThemes: 'string',
      llmCubes: 'string',
      operationType: 'number',
      userIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

