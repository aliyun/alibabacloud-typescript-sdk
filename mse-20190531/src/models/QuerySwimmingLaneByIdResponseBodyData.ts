// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySwimmingLaneByIdResponseBodyDataEntryRules } from "./QuerySwimmingLaneByIdResponseBodyDataEntryRules";


export class QuerySwimmingLaneByIdResponseBodyData extends $dara.Model {
  pathIndependentPercentageEnable?: boolean;
  enable?: boolean;
  enableRules?: boolean;
  entryRule?: string;
  entryRules?: QuerySwimmingLaneByIdResponseBodyDataEntryRules[];
  gatewaySwimmingLaneRouteJson?: string;
  gmtCreate?: string;
  gmtModified?: string;
  groupId?: number;
  id?: number;
  name?: string;
  regionId?: string;
  status?: number;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      pathIndependentPercentageEnable: 'PathIndependentPercentageEnable',
      enable: 'enable',
      enableRules: 'enableRules',
      entryRule: 'entryRule',
      entryRules: 'entryRules',
      gatewaySwimmingLaneRouteJson: 'gatewaySwimmingLaneRouteJson',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      groupId: 'groupId',
      id: 'id',
      name: 'name',
      regionId: 'regionId',
      status: 'status',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pathIndependentPercentageEnable: 'boolean',
      enable: 'boolean',
      enableRules: 'boolean',
      entryRule: 'string',
      entryRules: { 'type': 'array', 'itemType': QuerySwimmingLaneByIdResponseBodyDataEntryRules },
      gatewaySwimmingLaneRouteJson: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupId: 'number',
      id: 'number',
      name: 'string',
      regionId: 'string',
      status: 'number',
      tag: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entryRules)) {
      $dara.Model.validateArray(this.entryRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

