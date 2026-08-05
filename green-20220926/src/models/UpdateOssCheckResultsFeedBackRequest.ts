// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOssCheckResultsFeedBackRequest extends $dara.Model {
  /**
   * @remarks
   * The feedback.
   * 
   * @example
   * misreport
   */
  feedback?: string;
  /**
   * @remarks
   * The request ID of the query.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  queryRequestId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @remarks
   * The task ID.
   * 
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

