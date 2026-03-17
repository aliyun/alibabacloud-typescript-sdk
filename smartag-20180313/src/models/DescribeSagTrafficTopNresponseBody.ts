// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagTrafficTopNResponseBodyTrafficTopN extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * @example
   * sag-whfn****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the SAG instance.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The data transfer rate of the SAG instance. Unit: bit/s
   * 
   * @example
   * 3866.6666666666665
   */
  trafficRate?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      regionId: 'RegionId',
      trafficRate: 'TrafficRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      regionId: 'string',
      trafficRate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagTrafficTopNResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AFF7E5A6-6897-4FDC-A5A8-1978B5B3E545
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the data transfer rate of the SAG instance.
   */
  trafficTopN?: DescribeSagTrafficTopNResponseBodyTrafficTopN[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficTopN: 'TrafficTopN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficTopN: { 'type': 'array', 'itemType': DescribeSagTrafficTopNResponseBodyTrafficTopN },
    };
  }

  validate() {
    if(Array.isArray(this.trafficTopN)) {
      $dara.Model.validateArray(this.trafficTopN);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

