// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTenantZonesReadResponseBodyTenantZones extends $dara.Model {
  /**
   * @remarks
   * Example 1
   * 
   * @example
   * true
   */
  isElectable?: boolean;
  /**
   * @example
   * true
   */
  isPrimary?: boolean;
  /**
   * @example
   * true
   */
  isReadable?: string;
  /**
   * @example
   * cn-hangzhou-i
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      isElectable: 'IsElectable',
      isPrimary: 'IsPrimary',
      isReadable: 'IsReadable',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isElectable: 'boolean',
      isPrimary: 'boolean',
      isReadable: 'string',
      zone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

