// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDataCheckTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The validation template ID. If not specified, the built-in default template is used.
   * 
   * @example
   * 1001
   */
  checkTemplateId?: string;
  /**
   * @remarks
   * The validation type. Valid values:
   * 
   * - 0: data volume comparison.
   * - 1: metric comparison.
   * - 2: weak content comparison.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  checkType?: number;
  /**
   * @remarks
   * The ID of the destination data source.
   * 
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * Hive
   */
  dstDsType?: string;
  /**
   * @remarks
   * The ID of the source data source.
   * 
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * Hive
   */
  srcDsType?: string;
  /**
   * @remarks
   * The table detail creation mode. Valid values:
   * 
   * - 0: table-by-table fine-grained creation.
   * - 1: batch creation with the same schema.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  taskMode?: number;
  /**
   * @remarks
   * The task name. Only Chinese characters, English characters, and digits are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * data_check_task_demo
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      checkTemplateId: 'checkTemplateId',
      checkType: 'checkType',
      dstDsId: 'dstDsId',
      dstDsName: 'dstDsName',
      dstDsType: 'dstDsType',
      srcDsId: 'srcDsId',
      srcDsName: 'srcDsName',
      srcDsType: 'srcDsType',
      taskMode: 'taskMode',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkTemplateId: 'string',
      checkType: 'number',
      dstDsId: 'string',
      dstDsName: 'string',
      dstDsType: 'string',
      srcDsId: 'string',
      srcDsName: 'string',
      srcDsType: 'string',
      taskMode: 'number',
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

