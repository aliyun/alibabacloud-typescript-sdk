// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo extends $dara.Model {
  /**
   * @example
   * 0.0.1-D-20220630.11****
   */
  newOtaVersion?: string;
  /**
   * @example
   * 0.0.1-D-20220615.11****
   */
  otaVersion?: string;
  /**
   * @example
   * ota-e49929gv8acz5****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      newOtaVersion: 'NewOtaVersion',
      otaVersion: 'OtaVersion',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newOtaVersion: 'string',
      otaVersion: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

