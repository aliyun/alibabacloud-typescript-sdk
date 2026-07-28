// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DBVersionDetailSpecsComponentSpecs extends $dara.Model {
  /**
   * @remarks
   * The default number of replicas for the component.
   */
  defaultReplicas?: number;
  /**
   * @remarks
   * The maximum number of replicas for the component.
   */
  maxReplicas?: number;
  /**
   * @remarks
   * The minimum number of replicas for the component.
   */
  minReplicas?: number;
  /**
   * @remarks
   * The name of the component.
   */
  name?: string;
  /**
   * @remarks
   * The available specifications for the component.
   */
  specs?: string[];
  /**
   * @remarks
   * The step size for scaling the number of replicas.
   */
  step?: number;
  /**
   * @remarks
   * The type of the component.
   */
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
  /**
   * @remarks
   * The component specifications.
   */
  componentSpecs?: DBVersionDetailSpecsComponentSpecs[];
  /**
   * @remarks
   * Indicates whether the high availability (HA) edition is supported.
   */
  isHA?: boolean;
  /**
   * @remarks
   * Indicates whether the Standalone edition is supported.
   */
  isStandalone?: boolean;
  /**
   * @remarks
   * Indicates whether the Standalone Pro edition is supported.
   */
  isStandalonePro?: boolean;
  /**
   * @remarks
   * The zone mode of the specification.
   */
  zoneMode?: string;
  static names(): { [key: string]: string } {
    return {
      componentSpecs: 'componentSpecs',
      isHA: 'isHA',
      isStandalone: 'isStandalone',
      isStandalonePro: 'isStandalonePro',
      zoneMode: 'zoneMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentSpecs: { 'type': 'array', 'itemType': DBVersionDetailSpecsComponentSpecs },
      isHA: 'boolean',
      isStandalone: 'boolean',
      isStandalonePro: 'boolean',
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
  /**
   * @remarks
   * The specifications supported by the version.
   */
  specs?: DBVersionDetailSpecs[];
  /**
   * @remarks
   * The status of the version.
   */
  status?: string;
  /**
   * @remarks
   * The version number.
   */
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

