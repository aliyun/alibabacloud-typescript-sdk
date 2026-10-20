// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   * 
   * This parameter is required.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to release the ENS instance where the node resides. Default value: true.
   */
  releaseNode?: boolean;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'Body',
      clusterId: 'ClusterId',
      releaseNode: 'ReleaseNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
      clusterId: 'string',
      releaseNode: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

