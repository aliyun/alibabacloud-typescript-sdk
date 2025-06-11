// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnvironmentInfo } from "./EnvironmentInfo";
import { ParentResourceInfo } from "./ParentResourceInfo";
import { PluginClassInfo } from "./PluginClassInfo";
import { ResourceInfo } from "./ResourceInfo";


export class ListPluginAttachmentsResponseBodyDataItems extends $dara.Model {
  /**
   * @example
   * GatewayRoute
   */
  attachResourceType?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  environmentInfo?: EnvironmentInfo;
  parentResourceInfo?: ParentResourceInfo;
  /**
   * @example
   * pa-d0j9t5em1hkncrlo51mg
   */
  pluginAttachmentId?: string;
  pluginClassInfo?: PluginClassInfo;
  /**
   * @example
   * bGltaXRfYnlfaGVhZGVyOiB4LWFwaS1rZXkKbGltaXRfa2V5czoKLSBrZXk6IGV4YW1wbGUta2V5LWEKICBxdWVyeV9wZXJfc2Vjb25kOiAxMAotIGtleTogZXhhbXBsZS1rZXktYgogIHF1ZXJ5X3Blcl9zZWNvbmQ6IDEK
   */
  pluginConfig?: string;
  /**
   * @example
   * pl-cvu6r4um1hko3b3ti0a0
   */
  pluginId?: string;
  resourceInfos?: ResourceInfo[];
  static names(): { [key: string]: string } {
    return {
      attachResourceType: 'attachResourceType',
      enable: 'enable',
      environmentInfo: 'environmentInfo',
      parentResourceInfo: 'parentResourceInfo',
      pluginAttachmentId: 'pluginAttachmentId',
      pluginClassInfo: 'pluginClassInfo',
      pluginConfig: 'pluginConfig',
      pluginId: 'pluginId',
      resourceInfos: 'resourceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceType: 'string',
      enable: 'boolean',
      environmentInfo: EnvironmentInfo,
      parentResourceInfo: ParentResourceInfo,
      pluginAttachmentId: 'string',
      pluginClassInfo: PluginClassInfo,
      pluginConfig: 'string',
      pluginId: 'string',
      resourceInfos: { 'type': 'array', 'itemType': ResourceInfo },
    };
  }

  validate() {
    if(this.environmentInfo && typeof (this.environmentInfo as any).validate === 'function') {
      (this.environmentInfo as any).validate();
    }
    if(this.parentResourceInfo && typeof (this.parentResourceInfo as any).validate === 'function') {
      (this.parentResourceInfo as any).validate();
    }
    if(this.pluginClassInfo && typeof (this.pluginClassInfo as any).validate === 'function') {
      (this.pluginClassInfo as any).validate();
    }
    if(Array.isArray(this.resourceInfos)) {
      $dara.Model.validateArray(this.resourceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

