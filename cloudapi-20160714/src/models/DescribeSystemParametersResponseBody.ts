// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSystemParametersResponseBodySystemParams } from "./DescribeSystemParametersResponseBodySystemParams";


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

