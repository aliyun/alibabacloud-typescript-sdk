// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterAttachScriptsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ECK cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * eck-11111111
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the node pool to which the node will be added.
   * 
   * This parameter is required.
   * 
   * @example
   * np68mi5y1dd748ky37ojo2kqdrz
   */
  nodepoolId?: string;
  /**
   * @remarks
   * Optional parameters for the script, provided as a JSON string.
   * 
   * @example
   * {\\"key1\\":\\"val1\\"}
   */
  options?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodepoolId: 'NodepoolId',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodepoolId: 'string',
      options: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

