// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDIJobRequestTableMappingsSourceObjectSelectionRules } from "./CreateDijobRequestTableMappingsSourceObjectSelectionRules";
import { CreateDIJobRequestTableMappingsTransformationRules } from "./CreateDijobRequestTableMappingsTransformationRules";


export class CreateDIJobRequestTableMappings extends $dara.Model {
  /**
   * @remarks
   * The list of rules used to select synchronization objects in the source.
   */
  sourceObjectSelectionRules?: CreateDIJobRequestTableMappingsSourceObjectSelectionRules[];
  /**
   * @remarks
   * The list of transformation rules that you want to apply to the synchronization objects selected from the source. Each entry in the list defines a transformation rule.
   */
  transformationRules?: CreateDIJobRequestTableMappingsTransformationRules[];
  static names(): { [key: string]: string } {
    return {
      sourceObjectSelectionRules: 'SourceObjectSelectionRules',
      transformationRules: 'TransformationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceObjectSelectionRules: { 'type': 'array', 'itemType': CreateDIJobRequestTableMappingsSourceObjectSelectionRules },
      transformationRules: { 'type': 'array', 'itemType': CreateDIJobRequestTableMappingsTransformationRules },
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

