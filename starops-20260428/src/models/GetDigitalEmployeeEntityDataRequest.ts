// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDigitalEmployeeEntityDataRequest extends $dara.Model {
  /**
   * @remarks
   * The UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1770000000
   */
  from?: number;
  /**
   * @remarks
   * Only the .entity or .topo semantic sources of the current digital employee can be queried. Explicit access to internal storage or external data sources is prohibited.
   * 
   * This parameter is required.
   * 
   * @example
   * .entity with(type=\\"deployment\\", domain=\\"k8s\\") | limit 100
   */
  query?: string;
  /**
   * @remarks
   * The UNIX timestamp. Unit: seconds. The value must be greater than the value of from.
   * 
   * This parameter is required.
   * 
   * @example
   * 1770003600
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      query: 'query',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      query: 'string',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

