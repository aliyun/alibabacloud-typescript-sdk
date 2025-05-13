// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunLabel extends $dara.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  key?: string;
  runId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      key: 'Key',
      runId: 'RunId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      key: 'string',
      runId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

