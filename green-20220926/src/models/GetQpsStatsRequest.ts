// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQpsStatsRequest extends $dara.Model {
  /**
   * @remarks
   * The query conditions in JSON format.
   * > The protected objects returned vary based on the query conditions. For more information, see **Query parameter description**.
   * 
   * @example
   * {}
   */
  query?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'Query',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

