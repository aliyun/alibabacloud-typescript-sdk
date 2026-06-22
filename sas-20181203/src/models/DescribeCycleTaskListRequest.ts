// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCycleTaskListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration.
   * >Call the [CreateCycleTask](~~CreateCycleTask~~) operation to obtain this parameter.
   * 
   * @example
   * f93b6ee24cfd0aad44b897ad5051****
   */
  configId?: string;
  /**
   * @remarks
   * The page number of the current page when using paging.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page when using paging. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The node name. Valid values:
   * - **VIRUS_VUL_SCHEDULE_SCAN**: virus scan.
   * - **IMAGE_SCAN**: image scan.
   * - **EMG_VUL_SCHEDULE_SCAN**: emergency vulnerability scanning.
   * 
   * @example
   * IMAGE_SCAN
   */
  taskName?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * - **VIRUS_VUL_SCHEDULE_SCAN**: virus scan.
   * - **IMAGE_SCAN**: image scan.
   * - **EMG_VUL_SCHEDULE_SCAN**: emergency vulnerability scanning.
   * 
   * @example
   * IMAGE_SCAN
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      taskName: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

