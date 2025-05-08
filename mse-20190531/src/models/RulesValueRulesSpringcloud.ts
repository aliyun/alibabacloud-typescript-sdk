// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RulesValueRulesSpringcloudRestItems } from "./RulesValueRulesSpringcloudRestItems";


export class RulesValueRulesSpringcloud extends $dara.Model {
  condition?: string;
  restItems?: RulesValueRulesSpringcloudRestItems[];
  triggerPolicy?: string;
  enable?: boolean;
  appId?: string;
  priority?: number;
  tags?: string[];
  paths?: string[];
  path?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      restItems: 'restItems',
      triggerPolicy: 'triggerPolicy',
      enable: 'enable',
      appId: 'appId',
      priority: 'priority',
      tags: 'tags',
      paths: 'paths',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      restItems: { 'type': 'array', 'itemType': RulesValueRulesSpringcloudRestItems },
      triggerPolicy: 'string',
      enable: 'boolean',
      appId: 'string',
      priority: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
      paths: { 'type': 'array', 'itemType': 'string' },
      path: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.restItems)) {
      $dara.Model.validateArray(this.restItems);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

