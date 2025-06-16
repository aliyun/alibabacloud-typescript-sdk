// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrafficMirrorFilterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 28DB147D-217B-43E8-9E94-A3F6837DDC8A
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the mirrored traffic belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the filter.
   * 
   * @example
   * tmf-j6cmls82xnc86vtpe****
   */
  trafficMirrorFilterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      trafficMirrorFilterId: 'TrafficMirrorFilterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroupId: 'string',
      trafficMirrorFilterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

