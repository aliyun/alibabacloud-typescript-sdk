// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityProjectListRequest extends $dara.Model {
  /**
   * @remarks
   * Artificial Intelligence Cloud Call Service (AICCS) instance ID. You can obtain it from the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @remarks
   * The current page. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Page size. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Quality inspection job ID (supports fuzzy search).
   * 
   * @example
   * 15
   */
  projectId?: number;
  /**
   * @remarks
   * Quality inspection job name (supports fuzzy search).
   * 
   * @example
   * 质检
   */
  projectName?: string;
  /**
   * @remarks
   * Quality inspection job status. Valid values:  
   * 
   * - **0**: Start  
   * - **1**: Shutdown
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The check frequency type. Valid values:
   * 
   * - **1**: Periodic quality inspection
   * - **4**: Temporary quality inspection
   * 
   * @example
   * 1
   */
  checkFreqType?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      status: 'Status',
      checkFreqType: 'checkFreqType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      projectId: 'number',
      projectName: 'string',
      status: 'number',
      checkFreqType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

