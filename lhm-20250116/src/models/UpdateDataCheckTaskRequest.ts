// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataCheckTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the validation template. If this field is not specified, the original value is retained.
   * 
   * @example
   * 1001
   */
  checkTemplateId?: string;
  /**
   * @remarks
   * The ID of the destination data source.
   * 
   * @example
   * 2001
   */
  dstDsId?: string;
  /**
   * @remarks
   * The name of the destination data source.
   * 
   * @example
   * ds_demo
   */
  dstDsName?: string;
  /**
   * @remarks
   * The type of the destination data source.
   * 
   * @example
   * Hive
   */
  dstDsType?: string;
  /**
   * @remarks
   * The ID of the destination validation engine.
   * 
   * @example
   * 2001
   */
  dstEngineId?: string;
  /**
   * @remarks
   * The name of the destination validation engine.
   * 
   * @example
   * engine_demo
   */
  dstEngineName?: string;
  /**
   * @remarks
   * The type of the destination validation engine.
   * 
   * @example
   * Tez
   */
  dstEngineType?: string;
  /**
   * @remarks
   * The ID of the task to modify. This field is required.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * The ID of the source data source.
   * 
   * @example
   * 1001
   */
  srcDsId?: string;
  /**
   * @remarks
   * The name of the source data source.
   * 
   * @example
   * ds_demo
   */
  srcDsName?: string;
  /**
   * @remarks
   * The type of the source data source.
   * 
   * @example
   * Hive
   */
  srcDsType?: string;
  /**
   * @remarks
   * The ID of the source validation engine.
   * 
   * @example
   * 1001
   */
  srcEngineId?: string;
  /**
   * @remarks
   * The name of the source validation engine.
   * 
   * @example
   * engine_demo
   */
  srcEngineName?: string;
  /**
   * @remarks
   * The type of the source validation engine.
   * 
   * @example
   * Tez
   */
  srcEngineType?: string;
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * Data validation task description
   */
  taskDescription?: string;
  /**
   * @remarks
   * The name of the task. Only Chinese characters, English letters, and digits are supported.
   * 
   * @example
   * data_check_task_demo
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      checkTemplateId: 'checkTemplateId',
      dstDsId: 'dstDsId',
      dstDsName: 'dstDsName',
      dstDsType: 'dstDsType',
      dstEngineId: 'dstEngineId',
      dstEngineName: 'dstEngineName',
      dstEngineType: 'dstEngineType',
      id: 'id',
      srcDsId: 'srcDsId',
      srcDsName: 'srcDsName',
      srcDsType: 'srcDsType',
      srcEngineId: 'srcEngineId',
      srcEngineName: 'srcEngineName',
      srcEngineType: 'srcEngineType',
      taskDescription: 'taskDescription',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkTemplateId: 'string',
      dstDsId: 'string',
      dstDsName: 'string',
      dstDsType: 'string',
      dstEngineId: 'string',
      dstEngineName: 'string',
      dstEngineType: 'string',
      id: 'number',
      srcDsId: 'string',
      srcDsName: 'string',
      srcDsType: 'string',
      srcEngineId: 'string',
      srcEngineName: 'string',
      srcEngineType: 'string',
      taskDescription: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

