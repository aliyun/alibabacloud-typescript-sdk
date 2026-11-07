// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryNacosGrayConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: zh (default): Chinese. en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The DataId of the configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * demo-develop
   */
  dataId?: string;
  /**
   * @remarks
   * The name of the canary release rule.
   * 
   * @example
   * test
   */
  grayName?: string;
  /**
   * @remarks
   * The configuration group.
   * 
   * @example
   * DEFAULT_GROUP
   */
  group?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mse-cn-st21ri2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * 6bafdde3-4fa7-4d67-b3da-a607ab87f7e4
   */
  namespaceId?: string;
  /**
   * @remarks
   * The region where the cluster resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This field is deprecated.
   * 
   * @example
   * {}
   */
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      dataId: 'DataId',
      grayName: 'GrayName',
      group: 'Group',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      dataId: 'string',
      grayName: 'string',
      group: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      regionId: 'string',
      requestPars: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

