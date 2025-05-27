// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllProdsResponseBodyDataProdList extends $dara.Model {
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * *   qcloud: Tencent Cloud.
   * *   aliyun: Alibaba Cloud.
   * *   hcloud: Huawei Cloud.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The number of logs within the cloud service that are added to the threat analysis feature.
   * 
   * @example
   * 10
   */
  importedLogCount?: number;
  /**
   * @remarks
   * The time when the logs within the cloud service were last added to the threat analysis feature.
   * 
   * @example
   * 2023-11-23 12:12:12
   */
  modifyTime?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * @example
   * sas
   */
  prodCode?: string;
  /**
   * @remarks
   * The total number of logs within the cloud service.
   * 
   * @example
   * 19
   */
  totalLogCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudCode: 'CloudCode',
      importedLogCount: 'ImportedLogCount',
      modifyTime: 'ModifyTime',
      prodCode: 'ProdCode',
      totalLogCount: 'TotalLogCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudCode: 'string',
      importedLogCount: 'number',
      modifyTime: 'string',
      prodCode: 'string',
      totalLogCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

