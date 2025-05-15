// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceRequest extends $dara.Model {
  /**
   * @remarks
   * Region Id.
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
   * service-0e6fca6a51a544xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service instance id.
   * 
   * @example
   * si-b58c874912fc4294****
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * Wordpress
   */
  serviceName?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1.0
   */
  serviceVersion?: string;
  /**
   * @remarks
   * Whether to disclose service details.
   */
  showDetails?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      serviceInstanceId: 'ServiceInstanceId',
      serviceName: 'ServiceName',
      serviceVersion: 'ServiceVersion',
      showDetails: 'ShowDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serviceId: 'string',
      serviceInstanceId: 'string',
      serviceName: 'string',
      serviceVersion: 'string',
      showDetails: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.showDetails)) {
      $dara.Model.validateArray(this.showDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

