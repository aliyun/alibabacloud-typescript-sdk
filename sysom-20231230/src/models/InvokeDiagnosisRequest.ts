// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeDiagnosisRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The diagnosis channel (currently fixed to the ECS channel).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  channel?: string;
  /**
   * @remarks
   * The diagnosis parameters. Different diagnosis types require different parameters. Refer to the supplementary request parameter descriptions below for the parameters required by each diagnosis type.
   * 
   * >Notice: Pass a JSON-formatted string.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "instance": "i-wz9gdv7qmdhusamc4dl01",
   *     "uid": "xxxxxxxxxxxxxx",
   *     "region": "cn-shenzhen"
   * }
   */
  params?: string;
  /**
   * @remarks
   * The diagnosis type. This parameter distinguishes between different types of diagnostics.
   * 
   * This parameter is required.
   * 
   * @example
   * memgraph
   */
  serviceName?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      channel: 'channel',
      params: 'params',
      serviceName: 'service_name',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      channel: 'string',
      params: 'string',
      serviceName: 'string',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

