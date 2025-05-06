// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParameterGroupResponseBodyParameterGroupParameterDetail } from "./DescribeParameterGroupResponseBodyParameterGroupParameterDetail";


export class DescribeParameterGroupResponseBodyParameterGroup extends $dara.Model {
  /**
   * @remarks
   * The time when the parameter template was created. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-10T08:40:39Z
   */
  createTime?: string;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * Indicates whether to restart the cluster when this parameter template is applied. Valid values:
   * 
   * *   **0**: A restart is not required.
   * *   **1**: A restart is required.
   * 
   * @example
   * 1
   */
  forceRestart?: string;
  /**
   * @remarks
   * The number of parameters in the parameter template.
   * 
   * @example
   * 2
   */
  parameterCounts?: number;
  /**
   * @remarks
   * Details about the parameters.
   */
  parameterDetail?: DescribeParameterGroupResponseBodyParameterGroupParameterDetail[];
  /**
   * @remarks
   * The description of the parameter template.
   * 
   * @example
   * testgroup
   */
  parameterGroupDesc?: string;
  /**
   * @remarks
   * The ID of the parameter template.
   * 
   * @example
   * pcpg-**************
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The name of the parameter template.
   * 
   * @example
   * test
   */
  parameterGroupName?: string;
  /**
   * @remarks
   * The type of the parameter template. Valid values:
   * 
   * *   **0**: the default parameter template.
   * *   **1**: a custom parameter template.
   * *   **2**: an automatic backup parameter template. After you apply this type of template, the system automatically backs up the original parameter settings and saves the backup as a template.
   * 
   * @example
   * 1
   */
  parameterGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      forceRestart: 'ForceRestart',
      parameterCounts: 'ParameterCounts',
      parameterDetail: 'ParameterDetail',
      parameterGroupDesc: 'ParameterGroupDesc',
      parameterGroupId: 'ParameterGroupId',
      parameterGroupName: 'ParameterGroupName',
      parameterGroupType: 'ParameterGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      DBType: 'string',
      DBVersion: 'string',
      forceRestart: 'string',
      parameterCounts: 'number',
      parameterDetail: { 'type': 'array', 'itemType': DescribeParameterGroupResponseBodyParameterGroupParameterDetail },
      parameterGroupDesc: 'string',
      parameterGroupId: 'string',
      parameterGroupName: 'string',
      parameterGroupType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameterDetail)) {
      $dara.Model.validateArray(this.parameterDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

