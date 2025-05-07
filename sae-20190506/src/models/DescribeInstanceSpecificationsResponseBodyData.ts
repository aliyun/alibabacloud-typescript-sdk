// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSpecificationsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The CPU specification of the instance type. Unit: millicore.
   * 
   * @example
   * 2000
   */
  cpu?: number;
  /**
   * @remarks
   * Indicates whether the instance type is available. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The ID of the instance type.
   * 
   * @example
   * 4
   */
  id?: number;
  /**
   * @remarks
   * The memory size of the instance type. Unit: MB.
   * 
   * @example
   * 4096
   */
  memory?: number;
  /**
   * @remarks
   * The name of the instance type.
   */
  specInfo?: string;
  /**
   * @remarks
   * The version number of the instance type.
   * 
   * @example
   * 0
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      enable: 'Enable',
      id: 'Id',
      memory: 'Memory',
      specInfo: 'SpecInfo',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      enable: 'boolean',
      id: 'number',
      memory: 'number',
      specInfo: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

