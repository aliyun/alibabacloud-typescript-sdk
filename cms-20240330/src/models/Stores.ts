// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Stores extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** The SLS project name. This field has been moved to DatasourceConfigUnified.project. Using this field in write paths returns HTTP status code 400.
   * 
   * @example
   * my-sls-project
   * 
   * @deprecated
   */
  project?: string;
  /**
   * @remarks
   * **[Deprecated]** The region ID. This field has been moved to DatasourceConfigUnified.regionId. Using this field in write paths returns HTTP status code 400.
   * 
   * @example
   * cn-hangzhou
   * 
   * @deprecated
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the SLS Store.
   * 
   * @example
   * my-log-store
   */
  store?: string;
  /**
   * @remarks
   * The store type. Valid values:
   * 
   * - LOG: Logstore.
   * - METRIC: Metricstore.
   * 
   * @example
   * LOG
   */
  storeType?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'project',
      regionId: 'regionId',
      store: 'store',
      storeType: 'storeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: 'string',
      regionId: 'string',
      store: 'string',
      storeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

