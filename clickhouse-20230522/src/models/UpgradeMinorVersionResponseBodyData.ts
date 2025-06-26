// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeMinorVersionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cc-uf6x229yeq166****
   */
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

