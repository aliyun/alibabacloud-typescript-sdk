// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterNodePoolsRequest extends $dara.Model {
  /**
   * @remarks
   * Node pool name.
   * 
   * @example
   * nodepool-test
   */
  nodepoolName?: string;
  static names(): { [key: string]: string } {
    return {
      nodepoolName: 'NodepoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodepoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

