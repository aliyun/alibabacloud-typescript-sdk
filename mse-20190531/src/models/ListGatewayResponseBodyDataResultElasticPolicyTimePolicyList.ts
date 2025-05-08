// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayResponseBodyDataResultElasticPolicyTimePolicyList extends $dara.Model {
  /**
   * @remarks
   * The expected number of replicas for auto scale-out.
   * 
   * @example
   * 4
   */
  desiredReplica?: number;
  /**
   * @remarks
   * The end time of auto scale-out.
   * 
   * @example
   * 09:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of auto scale-out.
   * 
   * @example
   * 07:00
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

