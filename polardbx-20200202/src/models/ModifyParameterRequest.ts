// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyParameterRequest extends $dara.Model {
  /**
   * @remarks
   * The client request token. You can set this parameter to any unique string.
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
   * - **compute**: compute layer parameters.
   * - **storage**: storage layer parameters.
   * 
   * @example
   * compute
   */
  paramLevel?: string;
  parameterGroupId?: string;
  /**
   * @remarks
   * A JSON-formatted string. MapKey specifies the parameter name, and MapValue specifies the parameter value. The modifiable parameters are dynamically added or removed. Call the [DescribeParameterTemplates](https://help.aliyun.com/document_detail/196856.html) operation to query the available parameters. You can specify multiple parameters in a single request.
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

