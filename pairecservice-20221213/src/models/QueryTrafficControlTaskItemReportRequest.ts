// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTrafficControlTaskItemReportRequest extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-01-02 10:30:00
   */
  endTime?: string;
  /**
   * @remarks
   * The execution environment for the task. Valid values: Daily (development environment), Pre (staging environment), Prod (production environment).
   * 
   * This parameter is required.
   * 
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec_123****
   */
  instanceId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-01-01 10:30:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      environment: 'Environment',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      environment: 'string',
      instanceId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

