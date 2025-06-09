// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErrorRequest extends $dara.Model {
  /**
   * @remarks
   * appKey
   * 
   * This parameter is required.
   * 
   * @example
   * 233588686
   */
  appKey?: number;
  /**
   * @example
   * h5Resource
   */
  bizModule?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1739808000000
   */
  clientTime?: number;
  /**
   * @example
   * 233588686
   */
  did?: string;
  /**
   * @example
   * false
   */
  force?: boolean;
  /**
   * @example
   * android
   */
  os?: string;
  /**
   * @example
   * abcf4a4b-158c-4a0b-b81c-262785d84c4f
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      bizModule: 'BizModule',
      clientTime: 'ClientTime',
      did: 'Did',
      force: 'Force',
      os: 'Os',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      bizModule: 'string',
      clientTime: 'number',
      did: 'string',
      force: 'boolean',
      os: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

