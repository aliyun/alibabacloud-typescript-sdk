// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserProvisioningRdAccountStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the member in the resource directory.
   * 
   * @example
   * 1743382******
   */
  rdMemberId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      rdMemberId: 'RdMemberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      rdMemberId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

