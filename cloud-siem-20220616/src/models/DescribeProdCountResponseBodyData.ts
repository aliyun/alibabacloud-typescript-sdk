// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProdCountResponseBodyData extends $dara.Model {
  aliyunImportedCount?: number;
  /**
   * @remarks
   * The number of Alibaba Cloud services.
   * 
   * @example
   * 19
   */
  aliyunProdCount?: number;
  hcloudImportedCount?: number;
  /**
   * @remarks
   * The number of Huawei Cloud services.
   * 
   * @example
   * 2
   */
  hcloudProdCount?: number;
  idcImportedCount?: number;
  /**
   * @example
   * 2
   */
  idcProdCount?: number;
  qcloudImportedCount?: number;
  /**
   * @remarks
   * The number of Tencent Cloud services.
   * 
   * @example
   * 2
   */
  qcloudProdCount?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunImportedCount: 'AliyunImportedCount',
      aliyunProdCount: 'AliyunProdCount',
      hcloudImportedCount: 'HcloudImportedCount',
      hcloudProdCount: 'HcloudProdCount',
      idcImportedCount: 'IdcImportedCount',
      idcProdCount: 'IdcProdCount',
      qcloudImportedCount: 'QcloudImportedCount',
      qcloudProdCount: 'QcloudProdCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunImportedCount: 'number',
      aliyunProdCount: 'number',
      hcloudImportedCount: 'number',
      hcloudProdCount: 'number',
      idcImportedCount: 'number',
      idcProdCount: 'number',
      qcloudImportedCount: 'number',
      qcloudProdCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

