// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo extends $dara.Model {
  /**
   * @remarks
   * The new OTA version. A null value indicates that no new version is available.
   * 
   * @example
   * 0.0.1-D-20220630.11****
   */
  newOtaVersion?: string;
  /**
   * @remarks
   * The current OTA version.
   * 
   * @example
   * 0.0.1-D-20220615.11****
   */
  otaVersion?: string;
  /**
   * @remarks
   * The ID of the OTA update task.
   * 
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

