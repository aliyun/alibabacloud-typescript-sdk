// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupedFieldDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The search conditions that are used to query assets. The value of this parameter is in the JSON format. Separate multiple search conditions with commas (,). Example: `[{"name":"riskStatus","value":"YES"},{"name":"riskLevel","value":"2"}]`.
   * 
   * >  Supported search conditions include the instance ID, instance name, virtual private cloud (VPC) ID, region, and public IP address. You can call the [DescribeCriteria](~~DescribeCriteria~~) operation to query the supported search conditions.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"name\\":\\"clusterId\\",\\"value\\":\\"cfd26658431084c73a48dd97328ba8acf\\"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The filter condition for a grouping and aggregation query. Valid values:
   * 
   * *   **pod**
   * *   **appName**
   * *   **clusterId**
   * *   **namespace**
   * *   **image**
   * *   **containerScan**
   * 
   * This parameter is required.
   * 
   * @example
   * pod
   */
  groupField?: string;
  static names(): { [key: string]: string } {
    return {
      criteria: 'Criteria',
      groupField: 'GroupField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      criteria: 'string',
      groupField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

