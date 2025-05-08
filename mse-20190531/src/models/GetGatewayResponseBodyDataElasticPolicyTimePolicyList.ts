// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayResponseBodyDataElasticPolicyTimePolicyList extends $dara.Model {
  /**
   * @remarks
   * The number of expected replicas.
   * 
   * @example
   * 2
   */
  desiredReplica?: number;
  /**
   * @remarks
   * The end time of auto scale-out.
   * 
   * @example
   * 18:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of auto scale-out.
   * 
   * @example
   * 16:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      desiredReplica: 'DesiredReplica',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desiredReplica: 'number',
      endTime: 'string',
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

