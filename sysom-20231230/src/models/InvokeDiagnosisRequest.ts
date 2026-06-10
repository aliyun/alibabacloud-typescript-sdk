// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeDiagnosisRequest extends $dara.Model {
  /**
   * @remarks
   * Diagnosis channel (currently fixed as the ECS channel)
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  channel?: string;
  /**
   * @remarks
   * Diagnosis parameters. Different diagnosis types require different parameters. For the required parameters of each diagnosis type, see the Request Parameters supplement below.  
   * 
   * >Notice: Please pass a string in JSON format
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
   * Diagnosis type, used to distinguish between different types of diagnosis
   * 
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

