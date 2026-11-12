// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySearchParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB primary cluster, which is used to locate the Search cluster associated with the current account. Before you call this operation, you must enable the Search feature in the console. You can check the status by using the SearchClusterStatus field returned by DescribeDBClusterAttribute. Usage notes: Prerequisites: The cluster must have the Search feature enabled in the console. You can verify the status by using the SearchClusterStatus field returned by DescribeDBClusterAttribute.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-xxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * A non-empty JSON object string where the keys are parameter names and all values must be strings, such as 10% for percentages or 48mb for capacities. You can only modify parameters that are visible and modifiable in the template of the current version. Dynamic parameters take effect and are persisted immediately. Static parameters take effect after a restart triggered by the task flow. A success response only indicates that the task is accepted.
   * 
   * This parameter is required.
   * 
   * @example
   * {"indices.memory.index_buffer_size":"10%","indices.memory.min_index_buffer_size":"48mb"}
   */
  parameters?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      parameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

