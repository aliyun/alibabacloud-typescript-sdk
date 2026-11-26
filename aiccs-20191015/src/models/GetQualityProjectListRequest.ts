// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityProjectListRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the AICCS instance. You can obtain instance ID from the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the quality check task. Fuzzy search is supported.
   * 
   * @example
   * 15
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the quality check task. Fuzzy search is supported.
   * 
   * @example
   * Quality check
   */
  projectName?: string;
  /**
   * @remarks
   * The status of the quality check task. Valid values:
   * 
   * - **0**: Started.
   * - **1**: Stopped.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The type of the check frequency. Valid values:
   * 
   * - **1**: Periodic quality check.
   * - **4**: Temporary quality check.
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

