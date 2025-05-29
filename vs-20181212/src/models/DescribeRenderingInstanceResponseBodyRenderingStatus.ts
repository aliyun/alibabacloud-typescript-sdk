// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRenderingInstanceResponseBodyRenderingStatus extends $dara.Model {
  description?: string;
  /**
   * @example
   * MigrateLocalData
   */
  latestAction?: string;
  /**
   * @example
   * Working
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      latestAction: 'LatestAction',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      latestAction: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

