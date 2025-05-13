// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExperimentLabel extends $dara.Model {
  /**
   * @example
   * exp-890waerw09a0f
   */
  experimentId?: string;
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
  /**
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      key: 'string',
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

