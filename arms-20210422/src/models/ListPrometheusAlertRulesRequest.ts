// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusAlertRulesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  clusterId?: string;
  matchExpressions?: string;
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  status?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      matchExpressions: 'MatchExpressions',
      name: 'Name',
      regionId: 'RegionId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      matchExpressions: 'string',
      name: 'string',
      regionId: 'string',
      status: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

