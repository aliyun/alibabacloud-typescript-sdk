// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ChartsValueY extends $dara.Model {
  /**
   * @remarks
   * The name.
   * 
   * @example
   * cn-shanghai
   */
  name?: string;
  /**
   * @remarks
   * The QPS at the point in time.
   */
  data?: number[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      data: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChartsValue extends $dara.Model {
  /**
   * @remarks
   * The X-axis.
   */
  x?: string[];
  /**
   * @remarks
   * The Y-axis.
   */
  y?: ChartsValueY[];
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: { 'type': 'array', 'itemType': 'string' },
      y: { 'type': 'array', 'itemType': ChartsValueY },
    };
  }

  validate() {
    if(Array.isArray(this.x)) {
      $dara.Model.validateArray(this.x);
    }
    if(Array.isArray(this.y)) {
      $dara.Model.validateArray(this.y);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

