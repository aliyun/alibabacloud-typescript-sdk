// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ValueConstraints } from "./ValueConstraints";


export class DiskConstraints extends $dara.Model {
  /**
   * @remarks
   * 支持的磁盘类型。
   * 
   * @example
   * ["cloud_efficiency","cloud_ssd","cloud_essd","local_disk"]
   */
  categories?: string[];
  /**
   * @remarks
   * 磁盘数量最小值。
   */
  countConstraint?: ValueConstraints;
  /**
   * @remarks
   * 磁盘容量限制。
   */
  sizeConstraint?: ValueConstraints;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      countConstraint: 'CountConstraint',
      sizeConstraint: 'SizeConstraint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      countConstraint: ValueConstraints,
      sizeConstraint: ValueConstraints,
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(this.countConstraint && typeof (this.countConstraint as any).validate === 'function') {
      (this.countConstraint as any).validate();
    }
    if(this.sizeConstraint && typeof (this.sizeConstraint as any).validate === 'function') {
      (this.sizeConstraint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

