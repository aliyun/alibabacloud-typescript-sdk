// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrialLabel extends $dara.Model {
  /**
   * @example
   * 2023-12-27T03:30:04Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-12-27T03:30:04Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * key
   */
  key?: string;
  trialId?: string;
  /**
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

