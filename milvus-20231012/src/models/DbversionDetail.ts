// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DBVersionDetailSpecsComponentSpecs extends $dara.Model {
  defaultReplicas?: number;
  maxReplicas?: number;
  minReplicas?: number;
  name?: string;
  specs?: string[];
  step?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      defaultReplicas: 'defaultReplicas',
      maxReplicas: 'maxReplicas',
      minReplicas: 'minReplicas',
      name: 'name',
      specs: 'specs',
      step: 'step',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultReplicas: 'number',
      maxReplicas: 'number',
      minReplicas: 'number',
      name: 'string',
      specs: { 'type': 'array', 'itemType': 'string' },
      step: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.specs)) {
      $dara.Model.validateArray(this.specs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DBVersionDetailSpecs extends $dara.Model {
  componentSpecs?: DBVersionDetailSpecsComponentSpecs[];
  isHA?: boolean;
  isStandalone?: boolean;
  zoneMode?: string;
  static names(): { [key: string]: string } {
    return {
      componentSpecs: 'componentSpecs',
      isHA: 'isHA',
      isStandalone: 'isStandalone',
      zoneMode: 'zoneMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentSpecs: { 'type': 'array', 'itemType': DBVersionDetailSpecsComponentSpecs },
      isHA: 'boolean',
      isStandalone: 'boolean',
      zoneMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.componentSpecs)) {
      $dara.Model.validateArray(this.componentSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DBVersionDetail extends $dara.Model {
  specs?: DBVersionDetailSpecs[];
  status?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      specs: 'specs',
      status: 'status',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specs: { 'type': 'array', 'itemType': DBVersionDetailSpecs },
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.specs)) {
      $dara.Model.validateArray(this.specs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

