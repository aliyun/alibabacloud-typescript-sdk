// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePluginAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * The list of mount point IDs.
   */
  attachResourceIds?: string[];
  /**
   * @remarks
   * The type of the resource to which the plugin is mounted. Valid values: GatewayRoute, Gateway, GatewayDomain, HttpApi, and Operation.
   * 
   * @example
   * HttpApi
   */
  attachResourceType?: string;
  /**
   * @remarks
   * Specifies whether to enable the plugin. Default value: false.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-xxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * gw-cq7l5s5lhtg***
   */
  gatewayId?: string;
  /**
   * @remarks
   * The Base64-encoded content of the original plugin configuration.
   * 
   * @example
   * cHJlcGVuZDoKLSByb2xlOiBzeXN0ZW0KICBjb250ZW50OiDor7fkvb/nlKjoi7Hor63lm57nrZTpl67popgKYXBwZW5kOgotIHJvbGU6IHVzZXIKICBjb250ZW50OiDmr4/mrKHlm57nrZTlrozpl67popjvvIzlsJ3or5Xov5vooYzlj43pl64K
   */
  pluginConfig?: string;
  /**
   * @remarks
   * The plugin ID.
   * 
   * @example
   * pl-cvo8udem1hkob1qd67i0
   */
  pluginId?: string;
  static names(): { [key: string]: string } {
    return {
      attachResourceIds: 'attachResourceIds',
      attachResourceType: 'attachResourceType',
      enable: 'enable',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      pluginConfig: 'pluginConfig',
      pluginId: 'pluginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceIds: { 'type': 'array', 'itemType': 'string' },
      attachResourceType: 'string',
      enable: 'boolean',
      environmentId: 'string',
      gatewayId: 'string',
      pluginConfig: 'string',
      pluginId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachResourceIds)) {
      $dara.Model.validateArray(this.attachResourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

