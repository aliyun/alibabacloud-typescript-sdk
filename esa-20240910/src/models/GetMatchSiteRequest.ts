// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMatchSiteRequest extends $dara.Model {
  /**
   * @remarks
   * The record name.
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  recordName?: string;
  static names(): { [key: string]: string } {
    return {
      recordName: 'RecordName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

