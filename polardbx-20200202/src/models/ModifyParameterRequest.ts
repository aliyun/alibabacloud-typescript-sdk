// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParameterRequest extends $dara.Model {
  /**
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-hzjasdyuoo
   */
  DBInstanceId?: string;
  /**
   * @example
   * compute
   */
  paramLevel?: string;
  parameterGroupId?: string;
  /**
   * @example
   * {"CONN_POOL_BLOCK_TIMEOUT":6000}
   */
  parameters?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      paramLevel: 'ParamLevel',
      parameterGroupId: 'ParameterGroupId',
      parameters: 'Parameters',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBInstanceId: 'string',
      paramLevel: 'string',
      parameterGroupId: 'string',
      parameters: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

