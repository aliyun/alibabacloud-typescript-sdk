// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupedFieldDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The conditions for searching assets. This parameter is in JSON format. Separate multiple conditions with commas (,). Example: `[{"name":"riskStatus","value":"YES"},{"name":"riskLevel","value":"2"}]`.
   * > You can search for assets by conditions such as instance ID, instance name, VPC ID, region, and public IP address. Call [DescribeCriteria](~~DescribeCriteria~~) to query the supported search conditions.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"name\\":\\"clusterId\\",\\"value\\":\\"cfd26658431084c73a48dd97328ba8acf\\"}]
   */
  criteria?: string;
  /**
   * @remarks
   * The search item. Valid values:
   * - **pod**: pod.
   * - **appName**: application name.
   * - **clusterId**: cluster ID.
   * - **namespace**: namespace.
   * - **image**: image.
   * - **containerScan**: container scan.
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

