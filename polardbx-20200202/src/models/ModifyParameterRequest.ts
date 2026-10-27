// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParameterRequest extends $dara.Model {
  /**
   * @remarks
   * The client token. It can be any unique string.
   * 
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-hzjasdyuoo
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The parameter type. Valid values:
   * 
   * - **compute**: compute layer parameters
   * - **storage**: storage layer parameters
   * 
   * @example
   * compute
   */
  paramLevel?: string;
  /**
   * @remarks
   * The parameter template ID.
   * > You can call the [DescribeParameterGroups](https://help.aliyun.com/document_detail/207178.html) operation to query the details of all parameter templates in the specified region, including the parameter template IDs.
   * 
   * @example
   * rpg-s1y1xy06****fqs7y
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The parameters in JSON format. The key represents the parameter name, and the value represents the parameter value. Modifiable parameters are dynamically added or removed. Call the [DescribeParameterTemplates](https://help.aliyun.com/document_detail/196856.html) operation to obtain the list of modifiable parameters. You can specify multiple parameters at a time.
   * 
   * @example
   * {"CONN_POOL_BLOCK_TIMEOUT":6000}
   */
  parameters?: string;
  /**
   * @remarks
   * The region ID.
   * 
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

