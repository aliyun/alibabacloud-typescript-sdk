// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagDropTopNResponseBodyDropTopN extends $dara.Model {
  /**
   * @remarks
   * The packet loss rate of the Smart Access Gateway instance. Unit: pps.
   * 
   * @example
   * 0.0
   */
  dropRate?: string;
  /**
   * @remarks
   * The ID of the Smart Access Gateway instance.
   * 
   * @example
   * sag-whfn****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the Smart Access Gateway instance.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway instance.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dropRate: 'DropRate',
      instanceId: 'InstanceId',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dropRate: 'string',
      instanceId: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagDropTopNResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of packet loss information about Smart Access Gateway instances.
   */
  dropTopN?: DescribeSagDropTopNResponseBodyDropTopN[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AFF7E5A6-6897-4FDC-A5A8-1978B5B3E545
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dropTopN: 'DropTopN',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dropTopN: { 'type': 'array', 'itemType': DescribeSagDropTopNResponseBodyDropTopN },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dropTopN)) {
      $dara.Model.validateArray(this.dropTopN);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

