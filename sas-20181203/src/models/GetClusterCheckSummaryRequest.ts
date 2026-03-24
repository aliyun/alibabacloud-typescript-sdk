// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterCheckSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the queried cluster
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

