// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStandbyCreateModeResponseBodyData extends $dara.Model {
  /**
   * @example
   * BACKUP_RESTORE
   */
  createMode?: string;
  static names(): { [key: string]: string } {
    return {
      createMode: 'CreateMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

