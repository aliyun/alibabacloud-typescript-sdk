// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContainerClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-0005**********hhjw
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to forcibly delete active container backup clients.
   * 
   * @example
   * false
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      force: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

