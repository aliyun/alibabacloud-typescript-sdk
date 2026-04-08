// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTrafficControlTargetItemReportDetailRequest extends $dara.Model {
  /**
   * @example
   * 2024-01-01
   */
  date?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @remarks
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

