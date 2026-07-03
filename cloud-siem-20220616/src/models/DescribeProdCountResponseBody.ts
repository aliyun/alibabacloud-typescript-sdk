// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProdCountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of automatically connected Alibaba Cloud products.
   * 
   * @example
   * 2
   */
  aliyunImportedCount?: number;
  /**
   * @remarks
   * The number of Alibaba Cloud products.
   * 
   * @example
   * 19
   */
  aliyunProdCount?: number;
  /**
   * @remarks
   * The number of automatically connected Huawei Cloud products.
   * 
   * @example
   * 2
   */
  hcloudImportedCount?: number;
  /**
   * @remarks
   * The number of Huawei Cloud products.
   * 
   * @example
   * 2
   */
  hcloudProdCount?: number;
  /**
   * @remarks
   * The number of automatically connected IDC products.
   * 
   * @example
   * 2
   */
  idcImportedCount?: number;
  /**
   * @remarks
   * The number of IDC products.
   * 
   * @example
   * 2
   */
  idcProdCount?: number;
  /**
   * @remarks
   * The number of automatically connected Tencent Cloud products.
   * 
   * @example
   * 2
   */
  qcloudImportedCount?: number;
  /**
   * @remarks
   * The number of Tencent Cloud products.
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

export class DescribeProdCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeProdCountResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6276D891-*****-55B2-87B9-74D413F7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeProdCountResponseBodyData,
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

