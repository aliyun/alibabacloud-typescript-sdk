// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterSetMemberAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization configuration (JSON string, overwrite mode): {"model_ids":[...],"group_ids":["mg_xxx"]}. The internal key names use a fixed underscore style and are not converted to the camelCase convention used by the API. If this field is specified together with allowedModels, this field takes precedence.
   * 
   * @example
   * {"model_ids":[],"group_ids":["mg_qwen_49"]}
   */
  allowedModelGroupConfig?: string;
  /**
   * @remarks
   * The legacy authorization field (comma-separated numeric model IDs). This field is retained during the canary release of group-based authorization: tenants that have not enabled the grouping feature continue to use this field. If this field is specified together with allowedModelGroupConfig, the latter takes precedence.
   * 
   * @example
   * 101,102,103
   */
  allowedModels?: string;
  static names(): { [key: string]: string } {
    return {
      allowedModelGroupConfig: 'allowedModelGroupConfig',
      allowedModels: 'allowedModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedModelGroupConfig: 'string',
      allowedModels: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

