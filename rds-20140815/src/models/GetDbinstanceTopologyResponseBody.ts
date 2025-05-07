// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDBInstanceTopologyResponseBodyData } from "./GetDbinstanceTopologyResponseBodyData";


export class GetDBInstanceTopologyResponseBody extends $dara.Model {
  /**
   * @remarks
   * An internal parameter. You can ignore this parameter.
   * 
   * @example
   * None
   */
  code?: string;
  /**
   * @remarks
   * The details about the topology.
   */
  data?: GetDBInstanceTopologyResponseBodyData;
  /**
   * @remarks
   * An internal parameter. You can ignore this parameter.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7430AB1A-6D49-5B6D-B9E5-920250076074
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDBInstanceTopologyResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

