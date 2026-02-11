// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportPrometheusRulesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nameSpace?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      name: 'Name',
      nameSpace: 'NameSpace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      name: 'string',
      nameSpace: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

