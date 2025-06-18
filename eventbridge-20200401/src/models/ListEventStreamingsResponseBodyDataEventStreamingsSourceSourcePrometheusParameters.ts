// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourcePrometheusParameters extends $dara.Model {
  /**
   * @example
   * c83555068b6******ad213f565f209
   */
  clusterId?: string;
  /**
   * @example
   * JSON
   */
  dataType?: string;
  /**
   * @example
   * {"source":"prometheus-prod"}
   */
  externalLabels?: string;
  /**
   * @example
   * __name__=.*
   */
  labels?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * testRole
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataType: 'DataType',
      externalLabels: 'ExternalLabels',
      labels: 'Labels',
      regionId: 'RegionId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataType: 'string',
      externalLabels: 'string',
      labels: 'string',
      regionId: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

