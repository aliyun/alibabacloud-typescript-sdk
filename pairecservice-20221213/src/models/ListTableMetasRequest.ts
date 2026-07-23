// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTableMetasRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can get this ID by calling the [ListInstances](https://help.aliyun.com/document_detail/2411819.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The module of the data table. Valid values:
   * 
   * - ABTest: A/B testing data tables
   * 
   * - ExperimentTool: experiment tool tables
   * 
   * - DataDiagnosis: data diagnosis tables
   * 
   * This parameter is required.
   * 
   * @example
   * ABTest
   */
  module?: string;
  /**
   * @remarks
   * The table name to filter on.
   * 
   * @example
   * test1
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the data table. Valid values:
   * 
   * - MaxCompute
   * 
   * - Hologres
   * 
   * @example
   * MaxCompute
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      module: 'Module',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      module: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

