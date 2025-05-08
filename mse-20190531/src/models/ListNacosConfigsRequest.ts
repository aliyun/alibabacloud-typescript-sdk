// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNacosConfigsRequest extends $dara.Model {
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
   * The name of the application.
   * 
   * @example
   * fpx-pds-pns
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the data.
   * 
   * @example
   * zeekr-*
   */
  dataId?: string;
  /**
   * @remarks
   * The name of the group. Default value: `default`
   * 
   * @example
   * crm
   */
  group?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mse-cn-7mz2fj****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * fad732a7-ff1a-4f21-8126-4edd4****
   */
  namespaceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region in which the instance resides. The region is supported by Microservices Engine (MSE).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The extended request parameters. The JSON format is supported.
   * 
   * @example
   * {\\\\"appGroup\\\\":\\\\"sm_zk_asi_na610\\\\",\\\\"appName\\\\":\\\\"sm-zk\\\\",\\\\"appStage\\\\":\\\\"PUBLISH\\\\",\\\\"appUnit\\\\":\\\\"center\\\\",\\\\"bucId\\\\":\\\\"193554\\\\",\\\\"bucName\\\\":\\\\"Alibaba Mobile Business Group-UC\\\\",\\\\"provider\\\\":\\\\"aliyun\\\\"}
   */
  requestPars?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * billing
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      dataId: 'DataId',
      group: 'Group',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      dataId: 'string',
      group: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestPars: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

