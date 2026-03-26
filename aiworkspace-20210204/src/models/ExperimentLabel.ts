// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExperimentLabel extends $dara.Model {
  /**
   * @remarks
   * ExperimentId
   * 
   * @example
   * exp-890waerw09a0f
   */
  experimentId?: string;
  /**
   * @remarks
   * Create time
   * 
   * @example
   * 2023-12-27T03:30:04Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Modified time
   * 
   * @example
   * 2023-12-27T03:30:04Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Key of Experiment Label
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * Value of Experiment Label
   * 
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

