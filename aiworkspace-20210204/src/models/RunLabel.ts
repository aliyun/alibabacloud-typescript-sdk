// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunLabel extends $dara.Model {
  /**
   * @remarks
   * Time when the label was created
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Time when the label was last modified
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Key of the label
   * 
   * This parameter is required.
   */
  key?: string;
  /**
   * @remarks
   * ID of the Run that owns this label
   */
  runId?: string;
  /**
   * @remarks
   * Value of the label
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

