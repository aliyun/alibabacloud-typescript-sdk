// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateOrUpdateSwimmingLaneResponseBodyDataEntryRules } from "./CreateOrUpdateSwimmingLaneResponseBodyDataEntryRules";


export class CreateOrUpdateSwimmingLaneResponseBodyData extends $dara.Model {
  enable?: boolean;
  enableRules?: boolean;
  entryRule?: string;
  entryRules?: CreateOrUpdateSwimmingLaneResponseBodyDataEntryRules[];
  gatewaySwimmingLaneRouteJson?: string;
  gmtCreate?: string;
  gmtModified?: string;
  groupId?: number;
  id?: number;
  name?: string;
  pathIndependentPercentageEnable?: boolean;
  regionId?: string;
  status?: number;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
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
      pathIndependentPercentageEnable: 'pathIndependentPercentageEnable',
      regionId: 'regionId',
      status: 'status',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      enableRules: 'boolean',
      entryRule: 'string',
      entryRules: { 'type': 'array', 'itemType': CreateOrUpdateSwimmingLaneResponseBodyDataEntryRules },
      gatewaySwimmingLaneRouteJson: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupId: 'number',
      id: 'number',
      name: 'string',
      pathIndependentPercentageEnable: 'boolean',
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

