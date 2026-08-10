// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQpsStatsRequest extends $dara.Model {
  /**
   * @remarks
   * The query condition. The value is a string in JSON format.
   * 
   * >Different query conditions return different protected objects. For more information, see **Query parameter description**.
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

