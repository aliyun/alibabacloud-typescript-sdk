// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableResourceRequestDestinationResource extends $dara.Model {
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   InstanceTypeFamily: queries instance families. If you use this parameter value, you must also specify the Value parameter.
   * *   InstanceType: queries instance types. If you use this parameter value, you must also specify the Value, Cores, and Memory parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * InstanceTypeFamily
   */
  category?: string;
  /**
   * @remarks
   * The number of vCPUs. This parameter is available only when the Category parameter is set to InstanceType.
   * 
   * @example
   * 2
   */
  cores?: number;
  /**
   * @remarks
   * The size of the memory. Unit: GiB. This parameter is available only when the Category parameter is set to InstanceType.
   * 
   * @example
   * 4
   */
  memory?: number;
  /**
   * @remarks
   * Instance families or instance types.
   * 
   * *   If you set Category to InstanceTypeFamily, you must set this parameter to instance families such as ecs.c5.
   * *   If you set Category to InstanceType, you must set this parameter to instance types such as ecs.c5.large.
   * 
   * @example
   * ecs.c6
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      cores: 'Cores',
      memory: 'Memory',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      cores: 'number',
      memory: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

