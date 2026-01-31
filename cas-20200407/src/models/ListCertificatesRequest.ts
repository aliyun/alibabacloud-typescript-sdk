// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificatesRequest extends $dara.Model {
  /**
   * @example
   * BUY
   */
  certificateSource?: string;
  /**
   * @example
   * issued
   */
  certificateStatus?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * cas-ivauto-hqito6
   */
  instanceId?: string;
  /**
   * @example
   * test
   */
  keyword?: string;
  /**
   * @example
   * rg-aek****wia
   */
  resourceGroupId?: string;
  /**
   * @example
   * 10
   */
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      certificateSource: 'CertificateSource',
      certificateStatus: 'CertificateStatus',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      resourceGroupId: 'ResourceGroupId',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateSource: 'string',
      certificateStatus: 'string',
      currentPage: 'number',
      instanceId: 'string',
      keyword: 'string',
      resourceGroupId: 'string',
      showSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

