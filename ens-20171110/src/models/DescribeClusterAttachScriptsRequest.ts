// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterAttachScriptsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eck-11111111
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * np68mi5y1dd748ky37ojo2kqdrz
   */
  nodepoolId?: string;
  /**
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

