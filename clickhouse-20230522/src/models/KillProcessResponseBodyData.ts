// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KillProcessResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of queries that are terminated.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-xxxxxxx
   */
  DBInstanceID?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * cc-xxxxxxx
   */
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      DBInstanceID: 'DBInstanceID',
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      DBInstanceID: 'number',
      DBInstanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

