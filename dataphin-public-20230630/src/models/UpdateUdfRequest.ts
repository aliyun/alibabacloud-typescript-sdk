// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUdfRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The category. Valid values:
   * - 1: Window function.
   * - 2: Aggregate function.
   * - 3: Numerical function.
   * - 4: String function.
   * - 5: Time function.
   * - 6: IP address helper function.
   * - 7: URL-related function.
   * - 8: Encoding and decoding function.
   * - 9: Business-related function.
   * - 10: Other.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  category?: number;
  /**
   * @remarks
   * The name of the class that implements the function in the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * com.lydaas.SleepTest
   */
  className?: string;
  /**
   * @remarks
   * The command format for function invocation.
   * 
   * This parameter is required.
   * 
   * @example
   * udf_sleep(100)
   */
  commandHelp?: string;
  /**
   * @remarks
   * The submission comment.
   * 
   * This parameter is required.
   * 
   * @example
   * Test
   */
  comment?: string;
  /**
   * @remarks
   * The description.
   * 
   * This parameter is required.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the custom function.
   * 
   * This parameter is required.
   * 
   * @example
   * 1123
   */
  id?: number;
  /**
   * @remarks
   * The ID of the project.
   * 
   * This parameter is required.
   * 
   * @example
   * 711833
   */
  projectId?: number;
  /**
   * @remarks
   * The IDs of the referenced resources.
   * 
   * This parameter is required.
   */
  refResourceIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      className: 'ClassName',
      commandHelp: 'CommandHelp',
      comment: 'Comment',
      description: 'Description',
      id: 'Id',
      projectId: 'ProjectId',
      refResourceIdList: 'RefResourceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      className: 'string',
      commandHelp: 'string',
      comment: 'string',
      description: 'string',
      id: 'number',
      projectId: 'number',
      refResourceIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.refResourceIdList)) {
      $dara.Model.validateArray(this.refResourceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUdfRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the user who performs the operation.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The update command.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateUdfRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      updateCommand: UpdateUdfRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

