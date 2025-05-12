// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceFuncStatusRequestParams } from "./GetServiceFuncStatusRequestParams";


export class GetServiceFuncStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  channel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  params?: GetServiceFuncStatusRequestParams;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * livetrace
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      params: 'params',
      serviceName: 'service_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      params: GetServiceFuncStatusRequestParams,
      serviceName: 'string',
    };
  }

  validate() {
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

