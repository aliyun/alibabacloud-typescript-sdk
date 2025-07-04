// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNodeConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the index.
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The number of data replicas.
   * 
   * @example
   * 1
   */
  dataDuplicateNumber?: number;
  /**
   * @remarks
   * The number of data shards.
   * 
   * @example
   * 1
   */
  dataFragmentNumber?: number;
  /**
   * @remarks
   * The traffic percentage.
   * 
   * @example
   * -100
   */
  flowRatio?: number;
  /**
   * @remarks
   * The minimum service ratio.
   * 
   * @example
   * 10
   */
  minServicePercent?: number;
  /**
   * @remarks
   * Specifies whether to mount the cluster.
   * 
   * @example
   * true
   */
  published?: boolean;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * vpc_sh_domain_2
   */
  clusterName?: string;
  /**
   * @remarks
   * The name of the data source. Valid values: -search: search for data. -not_search: do not search for data.
   * 
   * @example
   * ha-cn-2r42ostoc01_0704
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The name of the configuration before the modification.
   * 
   * This parameter is required.
   * 
   * @example
   * ha-cn-zvp2iv9a401_qrs
   */
  name?: string;
  /**
   * @remarks
   * The type of the algorithm. Valid values:
   * 
   * *   pop: a popularity model.
   * *   cp: a category prediction model.
   * *   hot: a top search model.
   * *   hint: a hint model.
   * *   suggest: a drop-down suggestions model.
   * 
   * This parameter is required.
   * 
   * @example
   * " "
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      dataDuplicateNumber: 'dataDuplicateNumber',
      dataFragmentNumber: 'dataFragmentNumber',
      flowRatio: 'flowRatio',
      minServicePercent: 'minServicePercent',
      published: 'published',
      clusterName: 'clusterName',
      dataSourceName: 'dataSourceName',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      dataDuplicateNumber: 'number',
      dataFragmentNumber: 'number',
      flowRatio: 'number',
      minServicePercent: 'number',
      published: 'boolean',
      clusterName: 'string',
      dataSourceName: 'string',
      name: 'string',
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

