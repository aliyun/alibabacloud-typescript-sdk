// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AnalyzeSQLLineageResponseBodyLineageResultObjectMetadataFields } from "./AnalyzeSqllineageResponseBodyLineageResultObjectMetadataFields";


export class AnalyzeSQLLineageResponseBodyLineageResultObjectMetadata extends $dara.Model {
  /**
   * @remarks
   * The fields in the metatable.
   */
  fields?: AnalyzeSQLLineageResponseBodyLineageResultObjectMetadataFields[];
  /**
   * @remarks
   * The object name.
   * 
   * @example
   * a
   */
  name?: string;
  /**
   * @remarks
   * The source of metadata. Valid values:
   * 
   * *   **DDL**: The metadata comes from parsed SQL statements or definition of databases and tables collected by DMS.
   * *   **LINEAGE**: The metadata comes from lineage analysis results.
   * 
   * @example
   * DDL
   */
  source?: string;
  /**
   * @remarks
   * The object type. Valid values:
   * 
   * *   **TABLE**
   * *   **VIEW**
   * *   **TMP_TABLE**
   * 
   * @example
   * TABLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      name: 'Name',
      source: 'Source',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': AnalyzeSQLLineageResponseBodyLineageResultObjectMetadataFields },
      name: 'string',
      source: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

