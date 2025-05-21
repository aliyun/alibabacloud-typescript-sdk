// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPluginsResponseBodyDataItemsAttachmentInfo } from "./ListPluginsResponseBodyDataItemsAttachmentInfo";
import { ListPluginsResponseBodyDataItemsGatewayInfo } from "./ListPluginsResponseBodyDataItemsGatewayInfo";
import { ListPluginsResponseBodyDataItemsPluginClassInfo } from "./ListPluginsResponseBodyDataItemsPluginClassInfo";


export class ListPluginsResponseBodyDataItems extends $dara.Model {
  attachmentInfo?: ListPluginsResponseBodyDataItemsAttachmentInfo;
  gatewayInfo?: ListPluginsResponseBodyDataItemsGatewayInfo;
  pluginClassInfo?: ListPluginsResponseBodyDataItemsPluginClassInfo;
  /**
   * @example
   * pl-cvu6r4um1hko3b3ti0a0
   */
  pluginId?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentInfo: 'attachmentInfo',
      gatewayInfo: 'gatewayInfo',
      pluginClassInfo: 'pluginClassInfo',
      pluginId: 'pluginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentInfo: ListPluginsResponseBodyDataItemsAttachmentInfo,
      gatewayInfo: ListPluginsResponseBodyDataItemsGatewayInfo,
      pluginClassInfo: ListPluginsResponseBodyDataItemsPluginClassInfo,
      pluginId: 'string',
    };
  }

  validate() {
    if(this.attachmentInfo && typeof (this.attachmentInfo as any).validate === 'function') {
      (this.attachmentInfo as any).validate();
    }
    if(this.gatewayInfo && typeof (this.gatewayInfo as any).validate === 'function') {
      (this.gatewayInfo as any).validate();
    }
    if(this.pluginClassInfo && typeof (this.pluginClassInfo as any).validate === 'function') {
      (this.pluginClassInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

