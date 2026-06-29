// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUdfRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The category. Valid values:
   * 
   * - 1: window function
   * - 2: aggregate function
   * - 3: numerical function
   * - 4: string function
   * - 5: time function
   * - 6: IP address utility function
   * - 7: URL-related function
   * - 8: encoding and decoding function
   * - 9: business-related function
   * - 10: other.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  category?: number;
  /**
   * @remarks
   * The class name that implements the function in the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * com.lydaas.SleepTest
   */
  className?: string;
  /**
   * @remarks
   * The command format for function calling to invoke.
   * 
   * This parameter is required.
   * 
   * @example
   * udf_sleep(100)
   */
  commandHelp?: string;
  /**
   * @remarks
   * The commit remarks.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试
   */
  comment?: string;
  /**
   * @remarks
   * The description.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试
   */
  description?: string;
  /**
   * @remarks
   * The ID of the user-defined function.
   * 
   * This parameter is required.
   * 
   * @example
   * 1123
   */
  id?: number;
  /**
   * @remarks
   * The project ID.
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
   * The update command.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateUdfRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
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

