// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDIJobResponseBodyPagingInfoTableMappingsSourceObjectSelectionRules } from "./GetDijobResponseBodyPagingInfoTableMappingsSourceObjectSelectionRules";
import { GetDIJobResponseBodyPagingInfoTableMappingsTransformationRules } from "./GetDijobResponseBodyPagingInfoTableMappingsTransformationRules";


export class GetDIJobResponseBodyPagingInfoTableMappings extends $dara.Model {
  /**
   * @remarks
   * The list of rules used to select synchronization objects in the source.
   */
  sourceObjectSelectionRules?: GetDIJobResponseBodyPagingInfoTableMappingsSourceObjectSelectionRules[];
  /**
   * @remarks
   * The list of transformation rules that are applied to the synchronization objects selected from the source. Each entry in the list defines a transformation rule.
   */
  transformationRules?: GetDIJobResponseBodyPagingInfoTableMappingsTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      sourceObjectSelectionRules: 'SourceObjectSelectionRules',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceObjectSelectionRules: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoTableMappingsSourceObjectSelectionRules },
      transformationRules: { 'type': 'array', 'itemType': GetDIJobResponseBodyPagingInfoTableMappingsTransformationRules },
    };
  }

  validate() {
    if(Array.isArray(this.sourceObjectSelectionRules)) {
      $dara.Model.validateArray(this.sourceObjectSelectionRules);
    }
    if(Array.isArray(this.transformationRules)) {
      $dara.Model.validateArray(this.transformationRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

