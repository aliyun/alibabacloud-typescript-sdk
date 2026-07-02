// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeDiagnosisRequest extends $dara.Model {
  /**
   * @remarks
   * Diagnosis channel (currently fixed as the ECS channel).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  channel?: string;
  /**
   * @remarks
   * Diagnosis parameters. Different types of diagnoses require different diagnosis parameters. For the parameters required by each diagnosis type, refer to the supplementary request parameter description below.
   * 
   * >Notice: Please pass a JSON-formatted string.</notice>
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
   * Diagnosis type, used to distinguish different types of diagnoses.
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

