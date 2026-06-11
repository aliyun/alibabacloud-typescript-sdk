// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SmartqAuthorizeRequest extends $dara.Model {
  /**
   * @remarks
   * An array of dataset IDs. Separate multiple IDs with commas.
   * >Notice: This parameter is converted to the corresponding Q\\&A resource ID for authorization. If a \\`cubeId\\` does not correspond to an existing Q\\&A resource, an error is reported that the Q\\&A resource does not exist. Ensure that the \\`cubeId\\` is correct.
   * 
   * @example
   * wasdasd*******1235235sd,ASDAS*********ASDAW123
   */
  cubeIds?: string;
  /**
   * @remarks
   * The expiration time. The default is seven days.
   * Format: 2099-12-31
   * 
   * @example
   * 2099-12-31
   */
  expireDay?: string;
  /**
   * @remarks
   * An array of analysis subject IDs. Separate multiple IDs with commas.
   * 
   * @example
   * wasdasd*******1235235sd,ASDAS*********ASDAW123
   */
  llmCubeThemes?: string;
  /**
   * @remarks
   * An array of Q\\&A resource IDs. Separate multiple IDs with commas.
   * 
   * @example
   * wasdasd*******1235235sd,ASDAS*********ASDAW123
   */
  llmCubes?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - 0: Grant authorization
   * 
   * - 1: Delete authorization
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  operationType?: number;
  /**
   * @remarks
   * An array of user IDs. Separate multiple IDs with commas.
   * >Notice: The number of user IDs × (the number of Q\\&A resources + the number of analysis subjects) in a single request cannot exceed 100.
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

