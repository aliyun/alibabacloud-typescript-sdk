// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePackagesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The point in time when the MaxCompute package was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1536751124000
   */
  creationTime?: number;
  /**
   * @remarks
   * The ID of the package.
   * 
   * @example
   * 111111
   */
  id?: number;
  /**
   * @remarks
   * The ID of the instance to which the package belongs.
   * 
   * @example
   * 223453332
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the package.
   * 
   * @example
   * gxdata
   */
  name?: string;
  /**
   * @remarks
   * The account of the user that owns the package.
   * 
   * @example
   * cou-2221
   */
  owner?: string;
  /**
   * @remarks
   * The sensitivity level of the package. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 4
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the sensitivity level for the package.
   * 
   * @example
   * Highest sensitivity level
   */
  riskLevelName?: string;
  /**
   * @remarks
   * Indicates whether the package contains sensitive data. Valid values:
   * 
   * *   true: yes
   * *   false: no
   * 
   * @example
   * true
   */
  sensitive?: boolean;
  /**
   * @remarks
   * The total volume of sensitive data in the package. For example, the value can be the total number of sensitive tables in the MaxCompute package.
   * 
   * @example
   * 123
   */
  sensitiveCount?: number;
  /**
   * @remarks
   * The total volume of data in the package. For example, the value can be the total number of tables in the MaxCompute package.
   * 
   * @example
   * 321
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      id: 'Id',
      instanceId: 'InstanceId',
      name: 'Name',
      owner: 'Owner',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      sensitive: 'Sensitive',
      sensitiveCount: 'SensitiveCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      id: 'number',
      instanceId: 'number',
      name: 'string',
      owner: 'string',
      riskLevelId: 'number',
      riskLevelName: 'string',
      sensitive: 'boolean',
      sensitiveCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

