// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExploreUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c9cc4c5e220f8461f9d71b6ec6e******
   */
  clusterId?: string;
  /**
   * @remarks
   * The query statement that corresponds to the data source.
   * 
   * @example
   * {app="buy2"}
   */
  expression?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the Grafana data source.
   * 
   * This parameter is required.
   * 
   * @example
   * prometheus
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      expression: 'Expression',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      expression: 'string',
      regionId: 'string',
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

