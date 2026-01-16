// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'Body',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

