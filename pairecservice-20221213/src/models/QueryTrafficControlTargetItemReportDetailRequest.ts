// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTrafficControlTargetItemReportDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The report date.
   * 
   * @example
   * 2024-01-01
   */
  date?: string;
  /**
   * @remarks
   * The deployment environment. Valid values are Daily (daily environment), Pre (staging environment), and Prod (production environment).
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
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      environment: 'Environment',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      environment: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

