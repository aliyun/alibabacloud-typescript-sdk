// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRedisAllSessionResponseBodyDataSourceStats extends $dara.Model {
  /**
   * @remarks
   * The total number of sessions from the access source.
   * 
   * @example
   * 1
   */
  count?: string;
  /**
   * @remarks
   * The client IDs.
   */
  ids?: number[];
  /**
   * @remarks
   * The access source.
   * 
   * @example
   * 172.16.XX.XX
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ids: 'Ids',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      ids: { 'type': 'array', 'itemType': 'number' },
      key: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

