// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerAppResourceStatusResponseBodyRegions extends $dara.Model {
  isOffline?: boolean;
  isStaging?: boolean;
  /**
   * @example
   * unicom
   */
  isp?: string;
  /**
   * @example
   * 1
   */
  ready?: number;
  /**
   * @example
   * huadong
   */
  region?: string;
  /**
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      isOffline: 'IsOffline',
      isStaging: 'IsStaging',
      isp: 'Isp',
      ready: 'Ready',
      region: 'Region',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isOffline: 'boolean',
      isStaging: 'boolean',
      isp: 'string',
      ready: 'number',
      region: 'string',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

