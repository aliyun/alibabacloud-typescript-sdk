// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyDataFullTransferConfig extends $dara.Model {
  /**
   * @example
   * false
   */
  allowDestTableNotEmpty?: boolean;
  /**
   * @example
   * NORMAL
   */
  fullTransferSpeedMode?: string;
  /**
   * @example
   * NORMAL
   */
  fullVerifySpeedMode?: string;
  /**
   * @example
   * false
   */
  nonePkUkTruncateDstTable?: boolean;
  static names(): { [key: string]: string } {
    return {
      allowDestTableNotEmpty: 'AllowDestTableNotEmpty',
      fullTransferSpeedMode: 'FullTransferSpeedMode',
      fullVerifySpeedMode: 'FullVerifySpeedMode',
      nonePkUkTruncateDstTable: 'NonePkUkTruncateDstTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowDestTableNotEmpty: 'boolean',
      fullTransferSpeedMode: 'string',
      fullVerifySpeedMode: 'string',
      nonePkUkTruncateDstTable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

