// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SelectResourceResponseBodyResourceInfoList extends $dara.Model {
  /**
   * @example
   * 111
   */
  expireTime?: string;
  /**
   * @example
   * 11
   */
  lastExpire?: number;
  /**
   * @example
   * 1249
   */
  remainCount?: number;
  /**
   * @example
   * 2
   */
  resourceType?: number;
  /**
   * @example
   * second
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'expireTime',
      lastExpire: 'lastExpire',
      remainCount: 'remainCount',
      resourceType: 'resourceType',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      lastExpire: 'number',
      remainCount: 'number',
      resourceType: 'number',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

