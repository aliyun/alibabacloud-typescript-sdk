// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrialLabel extends $dara.Model {
  /**
   * @remarks
   * The time the label was created, in UTC and following the ISO 8601 standard.
   * 
   * @example
   * 2023-12-27T03:30:04Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time the label was last modified, in UTC and following the ISO 8601 standard.
   * 
   * @example
   * 2023-12-27T03:30:04Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The key of the label.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The ID of the associated trial.
   */
  trialId?: string;
  /**
   * @remarks
   * The value of the label.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      key: 'Key',
      trialId: 'TrialId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      key: 'string',
      trialId: 'string',
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

