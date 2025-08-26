// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForeignInstance extends $dara.Model {
  dataLinkName?: string;
  host?: string;
  instanceSource?: string;
  instanceType?: string;
  port?: number;
  properties?: { [key: string]: string };
  regionId?: string;
  sid?: string;
  static names(): { [key: string]: string } {
    return {
      dataLinkName: 'DataLinkName',
      host: 'Host',
      instanceSource: 'InstanceSource',
      instanceType: 'InstanceType',
      port: 'Port',
      properties: 'Properties',
      regionId: 'RegionId',
      sid: 'Sid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLinkName: 'string',
      host: 'string',
      instanceSource: 'string',
      instanceType: 'string',
      port: 'number',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regionId: 'string',
      sid: 'string',
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

