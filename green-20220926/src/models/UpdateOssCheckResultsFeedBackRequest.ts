// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOssCheckResultsFeedBackRequest extends $dara.Model {
  /**
   * @example
   * misreport
   */
  feedback?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  queryRequestId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @example
   * P_7SCUK8
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      feedback: 'Feedback',
      queryRequestId: 'QueryRequestId',
      regionId: 'RegionId',
      serviceCode: 'ServiceCode',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feedback: 'string',
      queryRequestId: 'string',
      regionId: 'string',
      serviceCode: 'string',
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

