// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUdfRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  category?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * com.lydaas.SleepTest
   */
  className?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * udf_sleep(100)
   */
  commandHelp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1123
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 711833
   */
  projectId?: number;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
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

