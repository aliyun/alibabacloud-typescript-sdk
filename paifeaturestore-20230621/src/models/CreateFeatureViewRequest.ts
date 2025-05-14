// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateFeatureViewRequestFields } from "./CreateFeatureViewRequestFields";


export class CreateFeatureViewRequest extends $dara.Model {
  /**
   * @example
   * {"save_original_field":true}
   */
  config?: string;
  /**
   * @example
   * 4
   */
  featureEntityId?: string;
  fields?: CreateFeatureViewRequestFields[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FeatureView1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @example
   * 5
   */
  registerDatasourceId?: string;
  /**
   * @example
   * table1
   */
  registerTable?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  syncOnlineTable?: boolean;
  /**
   * @example
   * 90
   */
  TTL?: number;
  tags?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Batch
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  writeMethod?: string;
  writeToFeatureDB?: boolean;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      featureEntityId: 'FeatureEntityId',
      fields: 'Fields',
      name: 'Name',
      projectId: 'ProjectId',
      registerDatasourceId: 'RegisterDatasourceId',
      registerTable: 'RegisterTable',
      syncOnlineTable: 'SyncOnlineTable',
      TTL: 'TTL',
      tags: 'Tags',
      type: 'Type',
      writeMethod: 'WriteMethod',
      writeToFeatureDB: 'WriteToFeatureDB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      featureEntityId: 'string',
      fields: { 'type': 'array', 'itemType': CreateFeatureViewRequestFields },
      name: 'string',
      projectId: 'string',
      registerDatasourceId: 'string',
      registerTable: 'string',
      syncOnlineTable: 'boolean',
      TTL: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      writeMethod: 'string',
      writeToFeatureDB: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

