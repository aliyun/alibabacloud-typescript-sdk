// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  env?: string;
  groupId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  intervalInSec?: number;
  ip?: string;
  measures?: string;
  serviceGroupId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: string;
  topicId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      env: 'env',
      groupId: 'groupId',
      intervalInSec: 'intervalInSec',
      ip: 'ip',
      measures: 'measures',
      serviceGroupId: 'serviceGroupId',
      startTime: 'startTime',
      topicId: 'topicId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      env: 'string',
      groupId: 'number',
      intervalInSec: 'number',
      ip: 'string',
      measures: 'string',
      serviceGroupId: 'number',
      startTime: 'string',
      topicId: 'number',
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

