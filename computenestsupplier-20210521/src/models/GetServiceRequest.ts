// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to filter the results by Alibaba Cloud account ID.
   * 
   * Valid values:
   * 
   * - true: Filters the results by Alibaba Cloud account ID.
   * 
   * - false: Does not filter the results by Alibaba Cloud account ID.
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
   * Call the [ListServices](https://help.aliyun.com/document_detail/2264368.html) operation to obtain the service ID.
   * 
   * @example
   * service-f8469d2d14eb40af****
   */
  serviceId?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-56eb5823dxxxx
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * WordPress Community Edition
   */
  serviceName?: string;
  /**
   * @remarks
   * The service version.
   * 
   * Call the [ListServices](https://help.aliyun.com/document_detail/2264368.html) operation to obtain the service version.
   * 
   * @example
   * 1
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The service sharing type.
   * 
   * Valid values:
   * 
   * - SharedAccount (default): common sharing.
   * 
   * - Resell: distribution sharing.
   * 
   * @example
   * SharedAccount
   */
  sharedAccountType?: string;
  /**
   * @remarks
   * The details to be returned.
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

