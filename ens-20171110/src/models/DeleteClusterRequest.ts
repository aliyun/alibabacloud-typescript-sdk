// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to retain cloud resources. Default value: false.
   */
  retainResources?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      retainResources: 'RetainResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      retainResources: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

