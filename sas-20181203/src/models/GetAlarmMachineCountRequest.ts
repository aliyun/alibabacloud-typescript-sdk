// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlarmMachineCountRequest extends $dara.Model {
  /**
   * @remarks
   * The source identifier of the request. Set this parameter to sas.
   * 
   * @example
   * sas
   */
  from?: string;
  resourceDirectoryAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      resourceDirectoryAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

