// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnvironmentInfo } from "./EnvironmentInfo";
import { GatewayInfo } from "./GatewayInfo";
import { ParentResourceInfo } from "./ParentResourceInfo";
import { PluginClassInfo } from "./PluginClassInfo";
import { ResourceInfo } from "./ResourceInfo";


export class GetPluginAttachmentResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  environmentInfo?: EnvironmentInfo;
  gatewayInfo?: GatewayInfo;
  parentResourceInfo?: ParentResourceInfo;
  /**
   * @example
   * pa-d05f1tmm1hku195dd8j0
   */
  pluginAttachmentId?: string;
  pluginClassInfo?: PluginClassInfo;
  /**
   * @example
   * cHJlcGVuZDoKLSByb2xlOiBzeXN0ZW0KICBjb250ZW50OiDor7fkvb/nlKjoi7Hor63lm57nrZTpl67popgKYXBwZW5kOgotIHJvbGU6IHVzZXIKICBjb250ZW50OiDmr4/mrKHlm57nrZTlrozpl67popjvvIzlsJ3or5Xov5vooYzlj43pl64K
   */
  pluginConfig?: string;
  /**
   * @example
   * pl-cvo8ub6m1hkvgv03r3k0
   */
  pluginId?: string;
  resourceInfos?: ResourceInfo[];
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      environmentInfo: 'environmentInfo',
      gatewayInfo: 'gatewayInfo',
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
      enable: 'boolean',
      environmentInfo: EnvironmentInfo,
      gatewayInfo: GatewayInfo,
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
    if(this.gatewayInfo && typeof (this.gatewayInfo as any).validate === 'function') {
      (this.gatewayInfo as any).validate();
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

export class GetPluginAttachmentResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: GetPluginAttachmentResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C61E30D3-579A-5B43-994E-31E02EDC9129
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPluginAttachmentResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

