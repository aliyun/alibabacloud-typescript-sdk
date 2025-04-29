// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightModifyOtaSearchV2ResponseBodyModuleAgentInfos } from "./FlightModifyOtaSearchV2responseBodyModuleAgentInfos";
import { FlightModifyOtaSearchV2ResponseBodyModuleAgentInfo } from "./FlightModifyOtaSearchV2responseBodyModuleAgentInfo";
import { FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfos } from "./FlightModifyOtaSearchV2responseBodyModuleFlightSegmentInfos";
import { FlightModifyOtaSearchV2ResponseBodyModulePassengerCount } from "./FlightModifyOtaSearchV2responseBodyModulePassengerCount";


export class FlightModifyOtaSearchV2ResponseBodyModule extends $dara.Model {
  agentInfos?: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfos[];
  agentInfo?: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfo;
  /**
   * @example
   * 2136019116915615639457351e06ee
   */
  cacheKey?: string;
  flightSegmentInfos?: FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfos[][];
  passengerCount?: FlightModifyOtaSearchV2ResponseBodyModulePassengerCount;
  /**
   * @example
   * a2ffebfe733742aab5c491d960ba3d59
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentInfos: 'agentInfos',
      agentInfo: 'agent_info',
      cacheKey: 'cache_key',
      flightSegmentInfos: 'flight_segment_infos',
      passengerCount: 'passenger_count',
      sessionId: 'session_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentInfos: { 'type': 'array', 'itemType': FlightModifyOtaSearchV2ResponseBodyModuleAgentInfos },
      agentInfo: FlightModifyOtaSearchV2ResponseBodyModuleAgentInfo,
      cacheKey: 'string',
      flightSegmentInfos: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': FlightModifyOtaSearchV2ResponseBodyModuleFlightSegmentInfos } },
      passengerCount: FlightModifyOtaSearchV2ResponseBodyModulePassengerCount,
      sessionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentInfos)) {
      $dara.Model.validateArray(this.agentInfos);
    }
    if(this.agentInfo && typeof (this.agentInfo as any).validate === 'function') {
      (this.agentInfo as any).validate();
    }
    if(Array.isArray(this.flightSegmentInfos)) {
      $dara.Model.validateArray(this.flightSegmentInfos);
    }
    if(this.passengerCount && typeof (this.passengerCount as any).validate === 'function') {
      (this.passengerCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

