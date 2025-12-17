// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceVersionRequestLabels extends $dara.Model {
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
   * cn-hangzhou-k
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

export class UpdateServiceVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The list of tags.
   * 
   * This parameter is required.
   */
  labels?: UpdateServiceVersionRequestLabels[];
  static names(): { [key: string]: string } {
    return {
      labels: 'labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': UpdateServiceVersionRequestLabels },
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

