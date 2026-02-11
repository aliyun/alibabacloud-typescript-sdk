// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrometheusAlertRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alertId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  alertName?: string;
  annotations?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  clusterId?: string;
  dispatchRuleId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  duration?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  expression?: string;
  labels?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  message?: string;
  notifyType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      annotations: 'Annotations',
      clusterId: 'ClusterId',
      dispatchRuleId: 'DispatchRuleId',
      duration: 'Duration',
      expression: 'Expression',
      labels: 'Labels',
      message: 'Message',
      notifyType: 'NotifyType',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertName: 'string',
      annotations: 'string',
      clusterId: 'string',
      dispatchRuleId: 'number',
      duration: 'string',
      expression: 'string',
      labels: 'string',
      message: 'string',
      notifyType: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

