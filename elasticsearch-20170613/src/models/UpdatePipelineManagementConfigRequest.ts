// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePipelineManagementConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The list of access addresses of the Elasticsearch instance where Kibana resides after Kibana pipeline management is enabled.
   */
  endpoints?: string[];
  esInstanceId?: string;
  /**
   * @remarks
   * The password used to log on to Kibana.
   * 
   * @example
   * ******
   */
  password?: string;
  /**
   * @remarks
   * The list of pipelines managed by Kibana.
   */
  pipelineIds?: string[];
  /**
   * @remarks
   * The pipeline management method. Valid values:
   * 
   * - ES: Kibana pipeline management.
   * - MULTIPLE_PIPELINE: configuration file management.
   * 
   * @example
   * ES
   */
  pipelineManagementType?: string;
  /**
   * @remarks
   * The username used to log on to Kibana.
   * 
   * @example
   * elastic
   */
  userName?: string;
  /**
   * @remarks
   * A unique token used to ensure idempotence of the request. The client generates this value. The value must be unique across different requests and can contain up to 64 ASCII characters.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'endpoints',
      esInstanceId: 'esInstanceId',
      password: 'password',
      pipelineIds: 'pipelineIds',
      pipelineManagementType: 'pipelineManagementType',
      userName: 'userName',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': 'string' },
      esInstanceId: 'string',
      password: 'string',
      pipelineIds: { 'type': 'array', 'itemType': 'string' },
      pipelineManagementType: 'string',
      userName: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    if(Array.isArray(this.pipelineIds)) {
      $dara.Model.validateArray(this.pipelineIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

