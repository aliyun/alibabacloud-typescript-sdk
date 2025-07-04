// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourcesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The data center in which the data source is deployed.
   * 
   * @example
   * test
   */
  domain?: string;
  /**
   * @remarks
   * The indexes.
   */
  indexes?: string[];
  /**
   * @remarks
   * The time when the full data of the data source was last queried.
   * 
   * @example
   * 1718787785
   */
  lastFulTime?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * data_source_name
   */
  name?: string;
  /**
   * @remarks
   * The status of the data source. Valid values: new: The data source is being created. publish: The data source is in the normal state. trash: The data source is being deleted.
   * 
   * @example
   * new
   */
  status?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      indexes: 'indexes',
      lastFulTime: 'lastFulTime',
      name: 'name',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      indexes: { 'type': 'array', 'itemType': 'string' },
      lastFulTime: 'number',
      name: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.indexes)) {
      $dara.Model.validateArray(this.indexes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

