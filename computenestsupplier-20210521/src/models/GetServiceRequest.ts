// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to filter information based on Alibaba Cloud account IDs.
   * 
   * @example
   * false
   */
  filterAliUid?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-4ee86df83fd948******
   */
  serviceId?: string;
  /**
   * @remarks
   * The Service Instance Id.
   * 
   * @example
   * si-85b1exxx
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The Service Name.
   * 
   * @example
   * Wordpress社区版
   */
  serviceName?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The share type of the service. Default value: SharedAccount. Valid values:
   * 
   * *   SharedAccount: The service is shared by multiple accounts.
   * *   Resell: The service is distributed.
   * 
   * @example
   * SharedAccount
   */
  sharedAccountType?: string;
  /**
   * @remarks
   * The information that you want to query.
   */
  showDetail?: string[];
  static names(): { [key: string]: string } {
    return {
      filterAliUid: 'FilterAliUid',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceName: 'ServiceName',
      serviceVersion: 'ServiceVersion',
      sharedAccountType: 'SharedAccountType',
      showDetail: 'ShowDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterAliUid: 'boolean',
      regionId: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceName: 'string',
      serviceVersion: 'string',
      sharedAccountType: 'string',
      showDetail: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.showDetail)) {
      $dara.Model.validateArray(this.showDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

