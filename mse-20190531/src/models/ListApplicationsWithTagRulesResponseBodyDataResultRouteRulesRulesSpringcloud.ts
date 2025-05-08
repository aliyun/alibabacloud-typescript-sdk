// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesSpringcloudRestItems } from "./ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesSpringcloudRestItems";


export class ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesSpringcloud extends $dara.Model {
  appId?: string;
  condition?: string;
  enable?: boolean;
  path?: string;
  paths?: string[];
  priority?: number;
  restItems?: ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesSpringcloudRestItems[];
  tags?: string[];
  triggerPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      condition: 'condition',
      enable: 'enable',
      path: 'path',
      paths: 'paths',
      priority: 'priority',
      restItems: 'restItems',
      tags: 'tags',
      triggerPolicy: 'triggerPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      condition: 'string',
      enable: 'boolean',
      path: 'string',
      paths: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      restItems: { 'type': 'array', 'itemType': ListApplicationsWithTagRulesResponseBodyDataResultRouteRulesRulesSpringcloudRestItems },
      tags: { 'type': 'array', 'itemType': 'string' },
      triggerPolicy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    if(Array.isArray(this.restItems)) {
      $dara.Model.validateArray(this.restItems);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

