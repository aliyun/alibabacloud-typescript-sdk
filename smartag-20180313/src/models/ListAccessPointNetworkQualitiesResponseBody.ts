// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessPointNetworkQualitiesResponseBodyAccessPointNetworkQualities extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * 115
   */
  id?: number;
  /**
   * @remarks
   * The packet loss rate.
   * 
   * @example
   * 0.00%
   */
  loss?: string;
  /**
   * @remarks
   * The network latency. Unit: milliseconds.
   * 
   * @example
   * 4.98
   */
  rtt?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      loss: 'Loss',
      rtt: 'Rtt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      loss: 'string',
      rtt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessPointNetworkQualitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The network quality of the endpoint.
   */
  accessPointNetworkQualities?: ListAccessPointNetworkQualitiesResponseBodyAccessPointNetworkQualities[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8E8E8C86-1404-122A-A1BB-84BBC2E9A4B1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointNetworkQualities: 'AccessPointNetworkQualities',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointNetworkQualities: { 'type': 'array', 'itemType': ListAccessPointNetworkQualitiesResponseBodyAccessPointNetworkQualities },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessPointNetworkQualities)) {
      $dara.Model.validateArray(this.accessPointNetworkQualities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

