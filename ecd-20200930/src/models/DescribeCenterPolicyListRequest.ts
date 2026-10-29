// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenterPolicyListRequest extends $dara.Model {
  /**
   * @remarks
   * 學術代理功能開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  academicProxy?: string;
  /**
   * @remarks
   * 業務類型。
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  businessType?: number;
  /**
   * @remarks
   * 模型庫功能開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  modelLibrary?: string;
  /**
   * @remarks
   * 分頁查詢時，當前頁的頁碼。    
   * 預設值：1。
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 分頁查詢時，每頁最大行數。
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 雲端電腦策略ID清單。
   */
  policyGroupId?: string[];
  /**
   * @remarks
   * 連接埠代理功能開關。取值範圍：
   * - on：開啟。
   * - off：關閉。
   * 
   * @example
   * off
   */
  portProxy?: string;
  /**
   * @remarks
   * 資源類型。
   * 
   * This parameter is required.
   * 
   * @example
   * desktop
   */
  resourceType?: string;
  /**
   * @remarks
   * 雲端電腦策略的生效範圍。
   * 
   * @example
   * GLOBAL
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      academicProxy: 'AcademicProxy',
      businessType: 'BusinessType',
      modelLibrary: 'ModelLibrary',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyGroupId: 'PolicyGroupId',
      portProxy: 'PortProxy',
      resourceType: 'ResourceType',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      academicProxy: 'string',
      businessType: 'number',
      modelLibrary: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyGroupId: { 'type': 'array', 'itemType': 'string' },
      portProxy: 'string',
      resourceType: 'string',
      scope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyGroupId)) {
      $dara.Model.validateArray(this.policyGroupId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

