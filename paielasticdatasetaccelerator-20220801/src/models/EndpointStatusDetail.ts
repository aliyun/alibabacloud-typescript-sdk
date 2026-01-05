// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IpPort } from "./IpPort";


export class EndpointStatusDetail extends $dara.Model {
  /**
   * @example
   * { 	"slot-j6co2fcd": {   	"Ip": "10.0.0.2", 		"Port": 7001 	}, 	"slot-asdgys4d": {   	"Ip": "10.0.0.3", 		"Port": 7002 	} }
   */
  ipPortMapping?: { [key: string]: IpPort };
  static names(): { [key: string]: string } {
    return {
      ipPortMapping: 'IpPortMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPortMapping: { 'type': 'map', 'keyType': 'string', 'valueType': IpPort },
    };
  }

  validate() {
    if(this.ipPortMapping) {
      $dara.Model.validateMap(this.ipPortMapping);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

