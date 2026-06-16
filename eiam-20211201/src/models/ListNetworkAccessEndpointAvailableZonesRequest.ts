// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNetworkAccessEndpointAvailableZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region that supports exclusive network endpoints.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  naeRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      naeRegionId: 'NaeRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      naeRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

