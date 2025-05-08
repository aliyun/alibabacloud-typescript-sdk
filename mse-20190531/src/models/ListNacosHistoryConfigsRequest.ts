// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNacosHistoryConfigsRequest extends $dara.Model {
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
   * The ID of the data.
   * 
   * @example
   * user-prod.yaml
   */
  dataId?: string;
  /**
   * @remarks
   * The name of the configuration group.
   * 
   * @example
   * fc-dev-cluster-1
   */
  group?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mse-cn-2r42e3bk20n
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * fc0f6e40-****-946b-45e3af313707
   */
  namespaceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region in which the instance resides. The region is supported by MSE.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The extended request parameters in the JSON format.
   * 
   * @example
   * {\\\\"appGroup\\\\":\\\\"aliyun-phecda-service-staging\\\\",\\\\"appName\\\\":\\\\"aliyun-phecda-service\\\\",\\\\"appStage\\\\":\\\\"DAILY\\\\",\\\\"appUnit\\\\":\\\\"center\\\\",\\\\"bucId\\\\":\\\\"250858\\\\",\\\\"bucName\\\\":\\\\"Alibaba Cloud\\\\",\\\\"provider\\\\":\\\\"aliyun\\\\"}
   */
  requestPars?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      dataId: 'DataId',
      group: 'Group',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      dataId: 'string',
      group: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
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

