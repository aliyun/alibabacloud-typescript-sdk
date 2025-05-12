// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeDiagnosisRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cloud_assist
   */
  channel?: string;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * memgraph
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
      params: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

