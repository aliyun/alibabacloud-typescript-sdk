// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RoutePolicy } from "./RoutePolicy";


export class TrafficConfig extends $dara.Model {
  additionalVersionWeight?: { [key: string]: number };
  createdTime?: string;
  lastModifiedTime?: string;
  requestId?: string;
  resolvePolicy?: string;
  routePolicy?: RoutePolicy;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalVersionWeight: 'additionalVersionWeight',
      createdTime: 'createdTime',
      lastModifiedTime: 'lastModifiedTime',
      requestId: 'requestId',
      resolvePolicy: 'resolvePolicy',
      routePolicy: 'routePolicy',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalVersionWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      createdTime: 'string',
      lastModifiedTime: 'string',
      requestId: 'string',
      resolvePolicy: 'string',
      routePolicy: RoutePolicy,
      versionId: 'string',
    };
  }

  validate() {
    if(this.additionalVersionWeight) {
      $dara.Model.validateMap(this.additionalVersionWeight);
    }
    if(this.routePolicy && typeof (this.routePolicy as any).validate === 'function') {
      (this.routePolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

