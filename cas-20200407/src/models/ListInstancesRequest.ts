// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @example
   * Digicert
   */
  brand?: string;
  /**
   * @example
   * issued
   */
  certificateStatus?: string;
  /**
   * @example
   * DV
   */
  certificateType?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * BUY
   */
  instanceType?: string;
  /**
   * @example
   * test
   */
  keyword?: string;
  /**
   * @example
   * rg-ae******4wia
   */
  resourceGroupId?: string;
  /**
   * @example
   * 10
   */
  showSize?: number;
  /**
   * @example
   * inactive
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      brand: 'Brand',
      certificateStatus: 'CertificateStatus',
      certificateType: 'CertificateType',
      currentPage: 'CurrentPage',
      instanceType: 'InstanceType',
      keyword: 'Keyword',
      resourceGroupId: 'ResourceGroupId',
      showSize: 'ShowSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brand: 'string',
      certificateStatus: 'string',
      certificateType: 'string',
      currentPage: 'number',
      instanceType: 'string',
      keyword: 'string',
      resourceGroupId: 'string',
      showSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

