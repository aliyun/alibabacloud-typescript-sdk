// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterUserKubeconfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eck-xxxxxxxxx
   */
  clusterId?: string;
  privateIpAddress?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      privateIpAddress: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

