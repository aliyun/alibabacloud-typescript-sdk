// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeFunctionResponseBody extends $dara.Model {
  /**
   * @example
   * ef-****
   */
  edgeFunctionName?: string;
  /**
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      edgeFunctionName: 'EdgeFunctionName',
      instanceName: 'InstanceName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeFunctionName: 'string',
      instanceName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

