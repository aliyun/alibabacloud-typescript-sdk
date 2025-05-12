// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * abcdef
   */
  quotaId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  workspaceId?: string;
  /**
   * @remarks
   * The application service type.
   * 
   * Valid values:
   * 
   * *   LLM
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * This parameter is required.
   * 
   * @example
   * LLM
   */
  appType?: string;
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * v1
   */
  appVersion?: string;
  /**
   * @remarks
   * The additional configurations that are required for service deployment.
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The number of instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  replicas?: number;
  /**
   * @remarks
   * The service name.
   * 
   * This parameter is required.
   * 
   * @example
   * foo
   */
  serviceName?: string;
  /**
   * @remarks
   * The service specifications. Valid values:
   * 
   * *   llama_7b_fp16
   * *   llama_7b_int8
   * *   llama_13b_fp16
   * *   llama_7b_int8
   * *   chatglm_6b_fp16
   * *   chatglm_6b_int8
   * *   chatglm2_6b_fp16
   * *   baichuan_7b_int8
   * *   baichuan_13b_fp16
   * *   baichuan_7b_fp16
   * 
   * This parameter is required.
   * 
   * @example
   * llama_7b_fp16
   */
  serviceSpec?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      workspaceId: 'WorkspaceId',
      appType: 'AppType',
      appVersion: 'AppVersion',
      config: 'Config',
      replicas: 'Replicas',
      serviceName: 'ServiceName',
      serviceSpec: 'ServiceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
      workspaceId: 'string',
      appType: 'string',
      appVersion: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      replicas: 'number',
      serviceName: 'string',
      serviceSpec: 'string',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

