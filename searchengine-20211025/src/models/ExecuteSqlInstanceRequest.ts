// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteSqlInstanceRequest extends $dara.Model {
  combineParam?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * select * from test
   */
  content?: string;
  /**
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
  dynamicParam?: { [key: string]: any };
  kvpair?: { [key: string]: any };
  params?: { [key: string]: any };
  staticParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      combineParam: 'combineParam',
      content: 'content',
      domain: 'domain',
      dynamicParam: 'dynamicParam',
      kvpair: 'kvpair',
      params: 'params',
      staticParam: 'staticParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combineParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      content: 'string',
      domain: 'string',
      dynamicParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      kvpair: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      staticParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.combineParam) {
      $dara.Model.validateMap(this.combineParam);
    }
    if(this.dynamicParam) {
      $dara.Model.validateMap(this.dynamicParam);
    }
    if(this.kvpair) {
      $dara.Model.validateMap(this.kvpair);
    }
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    if(this.staticParam) {
      $dara.Model.validateMap(this.staticParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

