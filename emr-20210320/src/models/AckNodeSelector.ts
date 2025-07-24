// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AckNodeSelectorLabels extends $dara.Model {
  /**
   * @remarks
   * 标签键。
   * 
   * @example
   * emr
   */
  key?: string;
  /**
   * @remarks
   * 标签值。
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class AckNodeSelectorTaints extends $dara.Model {
  /**
   * @remarks
   * 污点效果。
   */
  effect?: string;
  /**
   * @remarks
   * 污点键。
   * 
   * @example
   * emr
   */
  key?: string;
  /**
   * @remarks
   * 污点值。
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'Effect',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
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

export class AckNodeSelector extends $dara.Model {
  /**
   * @remarks
   * 污点列表。
   */
  labels?: AckNodeSelectorLabels[];
  /**
   * @remarks
   * 污点列表。
   */
  taints?: AckNodeSelectorTaints[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      taints: 'Taints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': AckNodeSelectorLabels },
      taints: { 'type': 'array', 'itemType': AckNodeSelectorTaints },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.taints)) {
      $dara.Model.validateArray(this.taints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

