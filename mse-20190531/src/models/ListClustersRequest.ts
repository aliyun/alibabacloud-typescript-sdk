// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClustersRequestTag } from "./ListClustersRequestTag";


export class ListClustersRequest extends $dara.Model {
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
   * The alias of the instance. Fuzzy match is supported.
   * 
   * @example
   * cluster
   */
  clusterAliasName?: string;
  keyId?: string;
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
   * This parameter is required.
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
   * {}
   */
  requestPars?: string;
  /**
   * @remarks
   * The ID of the resource group. For more information about resource groups, see the topic "View basic information of a resource group."
   * 
   * @example
   * rg-acfmxbzafebvvfa
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags. A maximum number of 20 tags are supported.
   */
  tag?: ListClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clusterAliasName: 'ClusterAliasName',
      keyId: 'KeyId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestPars: 'RequestPars',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clusterAliasName: 'string',
      keyId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestPars: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListClustersRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

