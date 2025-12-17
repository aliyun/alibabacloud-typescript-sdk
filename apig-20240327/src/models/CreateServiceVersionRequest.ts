// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceVersionRequestLabels extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * This parameter is required.
   * 
   * @example
   * topology.kubernetes.io/zone
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * cn-hangzhou-j
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The service tags.
   * 
   * This parameter is required.
   */
  labels?: CreateServiceVersionRequestLabels[];
  /**
   * @remarks
   * The version name.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'labels',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': CreateServiceVersionRequestLabels },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

