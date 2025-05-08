// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEdgeContainerAppResourceReserveResponseBodyReserveSet extends $dara.Model {
  /**
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @example
   * huazhong
   */
  region?: string;
  /**
   * @example
   * 1
   */
  replicas?: number;
  static names(): { [key: string]: string } {
    return {
      isp: 'Isp',
      region: 'Region',
      replicas: 'Replicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isp: 'string',
      region: 'string',
      replicas: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

