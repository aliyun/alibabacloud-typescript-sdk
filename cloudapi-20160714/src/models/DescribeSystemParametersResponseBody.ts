// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSystemParametersResponseBodySystemParamsSystemParamItem extends $dara.Model {
  /**
   * @remarks
   * Examples
   * 
   * @example
   * 192.168.1.1
   */
  demoValue?: string;
  /**
   * @remarks
   * The description of a parameter.
   * 
   * @example
   * Client IP Address
   */
  description?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * CaClientIp
   */
  paramName?: string;
  /**
   * @remarks
   * The type of the parameter.
   * 
   * @example
   * string
   */
  paramType?: string;
  static names(): { [key: string]: string } {
    return {
      demoValue: 'DemoValue',
      description: 'Description',
      paramName: 'ParamName',
      paramType: 'ParamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoValue: 'string',
      description: 'string',
      paramName: 'string',
      paramType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemParametersResponseBodySystemParams extends $dara.Model {
  systemParamItem?: DescribeSystemParametersResponseBodySystemParamsSystemParamItem[];
  static names(): { [key: string]: string } {
    return {
      systemParamItem: 'SystemParamItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemParamItem: { 'type': 'array', 'itemType': DescribeSystemParametersResponseBodySystemParamsSystemParamItem },
    };
  }

  validate() {
    if(Array.isArray(this.systemParamItem)) {
      $dara.Model.validateArray(this.systemParamItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSystemParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0CCDF65E-6050-412D-AD68-FA3D9196836C
   */
  requestId?: string;
  /**
   * @remarks
   * The returned information about system parameters. It is an array that consists of SystemParam data.
   */
  systemParams?: DescribeSystemParametersResponseBodySystemParams;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      systemParams: 'SystemParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      systemParams: DescribeSystemParametersResponseBodySystemParams,
    };
  }

  validate() {
    if(this.systemParams && typeof (this.systemParams as any).validate === 'function') {
      (this.systemParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

