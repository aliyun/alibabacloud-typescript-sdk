// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErrorsResponseBodyModelItems extends $dara.Model {
  /**
   * @example
   * 1740488561065
   */
  clientTime?: number;
  /**
   * @example
   * RANDOM-1729634758587856312DEVICE
   */
  did?: string;
  /**
   * @remarks
   * Utdid
   * 
   * @example
   * RANDOM-1729634758587856312DEVICE
   */
  utdid?: string;
  /**
   * @example
   * 9634758587856312DEV
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clientTime: 'ClientTime',
      did: 'Did',
      utdid: 'Utdid',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientTime: 'number',
      did: 'string',
      utdid: 'string',
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

