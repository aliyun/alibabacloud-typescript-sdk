// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspEventUserSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the request source. Set the value to **sas**.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The ID. You do not need to specify this parameter.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The IP address of the request. You do not need to specify this parameter.
   * 
   * @example
   * 127.0.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      id: 'Id',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      id: 'number',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

