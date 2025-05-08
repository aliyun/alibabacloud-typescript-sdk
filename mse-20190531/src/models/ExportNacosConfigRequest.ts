// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportNacosConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The application tag.
   * 
   * @example
   * qjl-gateway-openapi
   * 
   * @deprecated
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the data that you want to export.
   * 
   * > 
   * 
   * *   Multiple export methods are supported.
   * 
   * *   If you want to export a single configuration, you must leave the Ids parameter empty and specify the DataID and Group parameters.
   * 
   * @example
   * sms-mes-develop.prop****
   * 
   * @deprecated
   */
  dataId?: string;
  /**
   * @remarks
   * The configuration group name and the ID of the configuration that you want to export. Separate multiple configurations with comma (,).
   * 
   * @example
   * testGroup+testDataId1,testGroup+testDataId2
   */
  dataIds?: string;
  /**
   * @remarks
   * The name of the configuration group.
   * 
   * @example
   * TIMEDTASK_COMMON_GROUP
   * 
   * @deprecated
   */
  group?: string;
  /**
   * @remarks
   * The ID of the primary key of a configuration item.
   * 
   * >  - Multiple export methods are supported. You must specify this parameter if you want to export multiple configurations. - You can obtain the value of this parameter by calling the ListNacosConfigs operation. - If you specify this parameter, multiple configurations are exported. The DataId and Group parameters are invalid.
   * 
   * @example
   * 1709,1710
   * 
   * @deprecated
   */
  ids?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mse-cn-2r42ddc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * ae77c258-4d4f-478f-baaa-084aee0****
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      dataId: 'DataId',
      dataIds: 'DataIds',
      group: 'Group',
      ids: 'Ids',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      dataId: 'string',
      dataIds: 'string',
      group: 'string',
      ids: 'string',
      instanceId: 'string',
      namespaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

