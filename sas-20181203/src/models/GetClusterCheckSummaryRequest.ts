// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterCheckSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster to query.
   * 
   * This parameter is required.
   * 
   * @example
   * c3aaf6c8085f84791882eef200cd2****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

