// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUdfRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The UDF category identifier. Valid values: 1: window function. 2: statistical function. 3: numerical function. 4: string function. 5: time function. 6: IP address utility function. 7: URL-related function. 8: encoding and decoding function. 9: business-related function. 10: other.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
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
   * The command format for function calling invoke.
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
   * The compute engine type. Valid values: MAX_COMPUTE, HADOOP.
   * 
   * This parameter is required.
   * 
   * @example
   * MAX_COMPUTE
   */
  computeEngineType?: string;
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
   * The directory in which the function is stored.
   * 
   * @example
   * /
   */
  directory?: string;
  /**
   * @remarks
   * The function name.
   * 
   * This parameter is required.
   * 
   * @example
   * my_udf
   */
  name?: string;
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
   * The IDs of referenced resources.
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
      computeEngineType: 'ComputeEngineType',
      description: 'Description',
      directory: 'Directory',
      name: 'Name',
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
      computeEngineType: 'string',
      description: 'string',
      directory: 'string',
      name: 'string',
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

export class CreateUdfRequest extends $dara.Model {
  /**
   * @remarks
   * The create command.
   * 
   * This parameter is required.
   */
  createCommand?: CreateUdfRequestCreateCommand;
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
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateUdfRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

