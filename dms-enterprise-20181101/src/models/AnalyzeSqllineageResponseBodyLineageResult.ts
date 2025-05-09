// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AnalyzeSQLLineageResponseBodyLineageResultLineages } from "./AnalyzeSqllineageResponseBodyLineageResultLineages";
import { AnalyzeSQLLineageResponseBodyLineageResultObjectMetadata } from "./AnalyzeSqllineageResponseBodyLineageResultObjectMetadata";


export class AnalyzeSQLLineageResponseBodyLineageResult extends $dara.Model {
  /**
   * @remarks
   * The details about the lineage.
   */
  lineages?: AnalyzeSQLLineageResponseBodyLineageResultLineages[];
  /**
   * @remarks
   * The table and field metadata information.
   */
  objectMetadata?: AnalyzeSQLLineageResponseBodyLineageResultObjectMetadata[];
  static names(): { [key: string]: string } {
    return {
      lineages: 'Lineages',
      objectMetadata: 'ObjectMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineages: { 'type': 'array', 'itemType': AnalyzeSQLLineageResponseBodyLineageResultLineages },
      objectMetadata: { 'type': 'array', 'itemType': AnalyzeSQLLineageResponseBodyLineageResultObjectMetadata },
    };
  }

  validate() {
    if(Array.isArray(this.lineages)) {
      $dara.Model.validateArray(this.lineages);
    }
    if(Array.isArray(this.objectMetadata)) {
      $dara.Model.validateArray(this.objectMetadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

