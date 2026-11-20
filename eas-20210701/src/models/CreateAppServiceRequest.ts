// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 5db780a0-9d3e-4f35-a84a-xxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * - true: performs a dry run without performing the actual operation. If the request fails the dry run, an error is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * - false (default): sends a normal request.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
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
   * 12****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The type of the application service.
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
   * The additional configuration information required for deployment.
   * 
   * @example
   * { "ModelStorage": "oss", "OssPath": "oss://examplebucket/xxxx/" }
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
   * The name of the service.
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
   * - llama_7b_fp16
   * - llama_7b_int8
   * - llama_13b_fp16
   * - llama_7b_int8
   * - chatglm_6b_fp16
   * - chatglm_6b_int8
   * - chatglm2_6b_fp16
   * - baichuan_7b_int8
   * - baichuan_13b_fp16
   * - baichuan_7b_fp16
   * 
   * This parameter is required.
   * 
   * @example
   * llama_7b_fp16
   */
  serviceSpec?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
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
      clientToken: 'string',
      dryRun: 'boolean',
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

