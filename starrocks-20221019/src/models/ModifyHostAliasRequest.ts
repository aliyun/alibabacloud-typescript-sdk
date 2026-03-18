// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHostAliasRequestHostAliases extends $dara.Model {
  hostnames?: string[];
  /**
   * @example
   * 26.15.54.221
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      hostnames: 'hostnames',
      ip: 'ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostnames: { 'type': 'array', 'itemType': 'string' },
      ip: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostnames)) {
      $dara.Model.validateArray(this.hostnames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyHostAliasRequest extends $dara.Model {
  /**
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  hostAliases?: ModifyHostAliasRequestHostAliases[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      hostAliases: 'hostAliases',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      hostAliases: { 'type': 'array', 'itemType': ModifyHostAliasRequestHostAliases },
    };
  }

  validate() {
    if(Array.isArray(this.hostAliases)) {
      $dara.Model.validateArray(this.hostAliases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

