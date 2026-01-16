// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleClusterNodePoolShrinkRequest extends $dara.Model {
  bodyShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * np2201da356f5245cf8faa522a8a4c8224
   */
  nodepoolId?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'Body',
      clusterId: 'ClusterId',
      nodepoolId: 'NodepoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
      clusterId: 'string',
      nodepoolId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

