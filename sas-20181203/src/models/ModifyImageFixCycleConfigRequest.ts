// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyImageFixCycleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The cycle of the scheduled fix. Unit: day.
   * 
   * @example
   * 7
   */
  imageFixCycle?: number;
  /**
   * @remarks
   * Specifies whether to enable the schedule image fix.
   * 
   * *   **on**: enable
   * *   **off**: disable
   * 
   * @example
   * on
   */
  imageFixSwitch?: string;
  /**
   * @remarks
   * The range of the scheduled fix. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **type**: The type of the image. The value is fixed to repo.
   * *   **target**: The content of the image. The value is in the format of Namespace/Image repository.
   * 
   * @example
   * {\\"type\\":\\"repo\\",\\"target\\":[\\"cdp-uat/zentao\\",\\"qa-dac/yyuan9\\",\\"cafdms-qa/xxl-job-admin\\"]}
   */
  imageFixTarget?: string;
  /**
   * @remarks
   * The time range during which the image was modified. Unit: day.
   * 
   * @example
   * 30
   */
  imageTimeRange?: number;
  static names(): { [key: string]: string } {
    return {
      imageFixCycle: 'ImageFixCycle',
      imageFixSwitch: 'ImageFixSwitch',
      imageFixTarget: 'ImageFixTarget',
      imageTimeRange: 'ImageTimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageFixCycle: 'number',
      imageFixSwitch: 'string',
      imageFixTarget: 'string',
      imageTimeRange: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

