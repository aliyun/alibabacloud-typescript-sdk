// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParametersRequest extends $dara.Model {
  /**
   * @remarks
   * It is an online CLI tool that allows you to quickly retrieve and debug APIs. It can dynamically generate executable SDK code samples.
   * 
   * This parameter is required.
   * 
   * @example
   * TENANT
   */
  dimension?: string;
  /**
   * @remarks
   * Alibaba Cloud CLI
   * 
   * @example
   * ob2mr3oae0****
   */
  dimensionValue?: string;
  /**
   * @remarks
   * 498529
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      dimensionValue: 'DimensionValue',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      dimensionValue: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

