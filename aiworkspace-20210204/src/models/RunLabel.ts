// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunLabel extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last modified time.
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The label key.
   * 
   * This parameter is required.
   */
  key?: string;
  /**
   * @remarks
   * The ID of the run.
   */
  runId?: string;
  /**
   * @remarks
   * The label value.
   * 
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

